'use client';
import { images } from '@/constants/gallery';
import { getCroppedThumbnailUrlWithFormat, getUrlWithFormat } from '@/utils/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  const galleryImages = images.resources;

  // Transform images for lightbox - it expects objects with 'src' property
  const lightboxSlides = galleryImages.map(image => ({
    src: getUrlWithFormat(image.secure_url, 'webp'),
    alt: image.display_name || 'Gallery image'
  }));

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: 10,
        }}
      >
        {galleryImages.map((image, i) => (
          // <div key={i}>
          //   1.{image.secure_url}
          //   {/* // 2.{getCroppedThumbnailUrl(image.secure_url, 120, 120)} */}
          // </div>
          <Image
            key={i}
            src={getCroppedThumbnailUrlWithFormat(image.secure_url, 120, 120, "webp")}
            width={120}
            height={120}
            className="cursor-pointer"
            alt={`${image.display_name}`}
            onClick={() => setIndex(i)}
            loading="lazy"
            unoptimized={true}
          />
        ))}
        {/* {images.map((image, i) => (
          <div key={i}>hi, {image}</div>
          // <Image
          //   key={i}
          //   src={image.src}
          //   alt={`Image ${i + 1}`}
          //   style={{ width: '100%', cursor: 'pointer', objectFit: 'cover', aspectRatio: '1 / 1' }}
          //   onClick={() => setIndex(i)}
          //   loading="lazy"
          // />
        ))} */}
      </div >

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