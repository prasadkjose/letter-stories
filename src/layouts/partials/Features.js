"use client";

import ShortBanner from "@layouts/components/ShortBanner";
import { markdownify } from "@lib/utils/textConverter";
import { useRef } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Features = ({ features }) => {
  const paginationRef = useRef(null);
  return (
    <section className="section">
      <div className="container text-center">
        <div className="animate">
          <p className="uppercase">{features.sub_title}</p>
          {markdownify(features.title, "h2", "mt-4 section-title")}
          {markdownify(features.description, "p", "mt-10")}
        </div>
        <div className="animate from-right relative mt-10">
          <Swiper
            slidesPerView={1}
            pagination={{
              type: "bullets",
              clickable: true,
              dynamicBullets: true,
            }}
            // autoplay={{ delay: 3000 }}
            onBeforeInit={swiper => {
              swiper.params.pagination.el = paginationRef.current;
            }}
            modules={[Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {features.list.map((item, index) => (
              <SwiperSlide key={"feature-" + index}>
                <ShortBanner data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative mt-9 flex justify-center">
            <div className="pagination " ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
