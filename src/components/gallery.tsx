'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '@/constants/gallery';
import { getCroppedThumbnailUrlWithFormat, getUrlWithFormat } from '@/utils/utils';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lightGallery from 'lightgallery';

const IMAGES_PER_PAGE = 4;

interface GalleryProps {
  asRow?: boolean;
}

export default function Gallery({ asRow = false }: GalleryProps) {
  const [page, setPage] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryImages = images.resources;
  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);

  useEffect(() => {
    if (!galleryRef.current) return;

    const lg = lightGallery(galleryRef.current, {
      plugins: [lgZoom, lgThumbnail],
      selector: '.gallery-item',
      download: false,
    });

    return () => {
      lg.destroy();
    };
  }, []);

  return (
    <div className="relative">
      {asRow && (
        <div className="absolute -left-4 top-1/2 -translate-x-full -translate-y-1/2 z-10">
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 0))}
            disabled={page === 0}
            className="p-4 bg-white rounded-full shadow disabled:opacity-30 text-5xl cursor-pointer"
          >
            <ChevronLeft />
          </button>
        </div>
      )}

      <div
        ref={galleryRef}
        className={`grid ${asRow ? 'grid-cols-4 gap-4' : 'grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2'}`}
      >
        {galleryImages.map((image, i) => {
          const imageWidth = asRow ? 400 : 120;
          const imageHeight = asRow ? 240 : 120;
          const isVisible = !asRow || (i >= page * IMAGES_PER_PAGE && i < (page + 1) * IMAGES_PER_PAGE);

          return (
            <a
              key={i}
              className={`gallery-item cursor-pointer ${!isVisible ? 'hidden' : ''}`}
              data-src={getUrlWithFormat(image.secure_url, 'webp')}
              data-sub-html={image.display_name || 'Gallery image'}
            >
              <Image
                src={getCroppedThumbnailUrlWithFormat(image.secure_url, imageWidth, imageHeight, 'webp')}
                width={imageWidth}
                height={imageHeight}
                alt={image.display_name}
                loading="lazy"
                unoptimized
              />
            </a>
          );
        })}
      </div>

      {asRow && (
        <div className="absolute -right-4 top-1/2 translate-x-full -translate-y-1/2 z-10">
          <button
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages - 1))}
            disabled={page >= totalPages - 1}
            className="p-4 bg-white rounded-full shadow disabled:opacity-30 text-5xl cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
