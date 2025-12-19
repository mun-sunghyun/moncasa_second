import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../css/Postscript.scss";
import star_5 from "/img/star_5.png";

import hat from '/img/hat.png';

import ReviewCard from "../ui/ReviewCard";
import { REVIEWS } from "../../data/reviews";

import type { SofaSectionProps } from "../../types/interface"; 

const Postscript: React.FC<SofaSectionProps> = ({ cls = "" }) => {
  return (
    <div className={cls + 'mt-20 py-4 lg:py-14 lg:mt-10'}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <symbol id="icon-pencil" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23.6895 5.92216L18.4524 0.686218C18.0128 0.246833 17.4168 0 16.7953 0C16.1738 0 15.5778 0.246833 15.1383 0.686218L0.686727 15.1366C0.468345 15.3537 0.295199 15.6119 0.177321 15.8963C0.0594426 16.1807 -0.000825208 16.4857 8.53352e-06 16.7936V22.0308C8.53352e-06 22.6524 0.246939 23.2485 0.686477 23.688C1.12602 24.1276 1.72216 24.3745 2.34376 24.3745H22.0313C22.4042 24.3745 22.7619 24.2263 23.0256 23.9626C23.2894 23.6989 23.4375 23.3412 23.4375 22.9683C23.4375 22.5953 23.2894 22.2376 23.0256 21.9739C22.7619 21.7102 22.4042 21.562 22.0313 21.562H11.3672L23.6895 9.23739C23.9072 9.01974 24.0799 8.76133 24.1978 8.47691C24.3156 8.19249 24.3763 7.88764 24.3763 7.57977C24.3763 7.27191 24.3156 6.96706 24.1978 6.68264C24.0799 6.39822 23.9072 6.13981 23.6895 5.92216ZM7.38282 21.562H2.81251V16.9917L12.6563 7.14794L17.2266 11.7183L7.38282 21.562ZM19.2188 9.72606L14.6484 5.15575L16.7977 3.00653L21.368 7.57684L19.2188 9.72606Z" fill="#713131"/>
                    
                </symbol>

                {/* 인스타그램 아이콘 */}
                <symbol id="icon-instagram" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="" stroke-linecap="round" stroke-linejoin="round">
                    
                    <path d="M7.25 0H17.75C21.75 0 25 3.25 25 7.25V17.75C25 19.6728 24.2362 21.5169 22.8765 22.8765C21.5169 24.2362 19.6728 25 17.75 25H7.25C3.25 25 0 21.75 0 17.75V7.25C0 5.32718 0.763837 3.48311 2.12348 2.12348C3.48311 0.763837 5.32718 0 7.25 0ZM7 2.5C5.80653 2.5 4.66193 2.97411 3.81802 3.81802C2.97411 4.66193 2.5 5.80653 2.5 7V18C2.5 20.4875 4.5125 22.5 7 22.5H18C19.1935 22.5 20.3381 22.0259 21.182 21.182C22.0259 20.3381 22.5 19.1935 22.5 18V7C22.5 4.5125 20.4875 2.5 18 2.5H7ZM19.0625 4.375C19.4769 4.375 19.8743 4.53962 20.1674 4.83265C20.4604 5.12567 20.625 5.5231 20.625 5.9375C20.625 6.3519 20.4604 6.74933 20.1674 7.04235C19.8743 7.33538 19.4769 7.5 19.0625 7.5C18.6481 7.5 18.2507 7.33538 17.9576 7.04235C17.6646 6.74933 17.5 6.3519 17.5 5.9375C17.5 5.5231 17.6646 5.12567 17.9576 4.83265C18.2507 4.53962 18.6481 4.375 19.0625 4.375ZM12.5 6.25C14.1576 6.25 15.7473 6.90848 16.9194 8.08058C18.0915 9.25268 18.75 10.8424 18.75 12.5C18.75 14.1576 18.0915 15.7473 16.9194 16.9194C15.7473 18.0915 14.1576 18.75 12.5 18.75C10.8424 18.75 9.25268 18.0915 8.08058 16.9194C6.90848 15.7473 6.25 14.1576 6.25 12.5C6.25 10.8424 6.90848 9.25268 8.08058 8.08058C9.25268 6.90848 10.8424 6.25 12.5 6.25ZM12.5 8.75C11.5054 8.75 10.5516 9.14509 9.84835 9.84835C9.14509 10.5516 8.75 11.5054 8.75 12.5C8.75 13.4946 9.14509 14.4484 9.84835 15.1517C10.5516 15.8549 11.5054 16.25 12.5 16.25C13.4946 16.25 14.4484 15.8549 15.1517 15.1517C15.8549 14.4484 16.25 13.4946 16.25 12.5C16.25 11.5054 15.8549 10.5516 15.1517 9.84835C14.4484 9.14509 13.4946 8.75 12.5 8.75Z" fill="#713131"/>
                    
                </symbol>
            </svg>
                <div className="title-group flex items-center justify-between max-w-md mx-auto px-4 lg:px-0">
                    <h2 className="font-pretendardBold text-title-lg">고객님들의 공간이 담긴 솔직 후기</h2>
                    {/* 데스크탑 */}
                    <div className="hidden lg:flex icon-group review_btn gap-3">
                        <button className="option-btn">
                            <svg className="icons"><use href="#icon-pencil"></use></svg>
                            후기작성하기
                        </button>
                        <img src={hat} className="santa-hat1"></img>
                        <button className="option-btn">
                            <svg className="icons"><use href="#icon-instagram"></use></svg>
                            인스타그램 보기
                        </button>
                        <img src={hat} className="santa-hat2"></img>
                    </div>
                    {/* 모바일 */}
                    <div className="lg:hidden icon-group review_btn flex">
                        <button className="option-btn">
                            <svg className="icons"><use href="#icon-pencil"></use></svg>
                        </button>
                        <button className="option-btn">
                            <svg className="icons"><use href="#icon-instagram"></use></svg>
                        </button>
                    </div>
                </div>
                <div className="background flex justify-center items-center">
                    <p className="title1">포토 리뷰 이벤트로 <strong>사은품 증정</strong> 기회 놓치지 마세요!</p>
                </div>
      <div className="max-w-md mx-auto pt-2 lg:pt-4 overflow-visible ps-4 lg:ps-0">
        <Swiper
          pagination={{ type: "progressbar" }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper !overflow-visible"
          slidesPerView={2.2}
          spaceBetween={5}
           breakpoints={{
            768: {
              slidesPerView: 4.1,
              spaceBetween: 10,
            },
          }}
          loop
        >
          {REVIEWS.map((item, idx) => (
            <SwiperSlide key={`${item.title}-${idx}`} className="overflow-visible">
              <ReviewCard
                imageSrc={item.imageSrc}
                starsSrc={star_5}
                title={item.title}
                desc={item.desc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    );
}
export default Postscript;