'use client';
import { images } from '@/constants/gallery';
import { getCroppedThumbnailUrlWithFormat, getUrlWithFormat } from '@/utils/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

const IMAGES_PER_PAGE = 4;
interface GalleryProps {
  asRow?: boolean;
}
export default function Gallery({ asRow = false }: GalleryProps) {
  const [index, setIndex] = useState(-1);
  const [page, setPage] = useState(0);

  const galleryImages = images.resources;
  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);

  // Transform images for lightbox - it expects objects with 'src' property
  const lightboxSlides = galleryImages.map(image => ({
    src: getUrlWithFormat(image.secure_url, 'webp'),
    alt: image.display_name || 'Gallery image'
  }));

  const currentImages = asRow
    ? galleryImages.slice(page * IMAGES_PER_PAGE, (page + 1) * IMAGES_PER_PAGE)
    : galleryImages;

  return (
    <>
      <div className="relative">
        {asRow && (
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => setPage(prev => Math.max(prev - 1, 0))}
              disabled={page === 0}
              className="p-2 bg-white rounded-full shadow disabled:opacity-30"
            >
              <ChevronLeft />
            </button>
          </div>
        )}

        <div className={`overflow-hidden`}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={page}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`grid ${asRow ? 'grid-cols-4 gap-4' : 'grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2'}`}
            >
              {currentImages.map((image, i) => {
                const globalIndex = asRow ? page * IMAGES_PER_PAGE + i : i;
                const imageWidth = asRow ? 400 : 120;
                const imageHeight = asRow ? 240 : 120;
                return (
                  <Image
                    key={globalIndex}
                    src={getCroppedThumbnailUrlWithFormat(
                      image.secure_url,
                      imageWidth,
                      imageHeight,
                      'webp'
                    )}
                    width={imageWidth}
                    height={imageHeight}
                    className="cursor-pointer"
                    alt={image.display_name}
                    onClick={() => setIndex(globalIndex)}
                    loading="lazy"
                    unoptimized
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {asRow && (
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => setPage(prev => Math.min(prev + 1, totalPages - 1))}
              disabled={page >= totalPages - 1}
              className="p-2 bg-white rounded-full shadow disabled:opacity-30"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={lightboxSlides}
        index={index}
        plugins={[Zoom]}
      />
    </>
  );
}