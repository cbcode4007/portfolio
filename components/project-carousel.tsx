"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

type MediaItem =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string };

interface ProjectCarouselProps {
  media?: MediaItem[];
}

export default function ProjectCarousel({
  media = [],
}: ProjectCarouselProps) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  if (!media || media.length === 0) {
    return null;
  }

  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".project-carousel-pagination",
          clickable: true,
        }}
        className="w-full rounded-xl overflow-hidden"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full overflow-hidden rounded-xl h-64 md:h-112 group">

              {item.type === "image" && (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt ?? "Project screenshot"}
                    fill
                    className="object-scale-down"
                  />
                  <button
                    onClick={() => setZoomedImage(item.src)}
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                    aria-label="Zoom image"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {item.type === "video" && (
                <video
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="project-carousel-pagination swiper-pagination flex justify-center gap-2 mt-4"
        style={{ position: "static" }}
      />
    </div>

    {/* Zoom Modal */}
    {zoomedImage && (
      <div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={() => setZoomedImage(null)}
      >
        <div className="relative max-w-7xl max-h-full">
          <Image
            src={zoomedImage}
            alt="Zoomed project screenshot"
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    )}
    </>
  );
}
