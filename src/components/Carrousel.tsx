"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

import Image from "next/image"

import { Autoplay, Pagination } from "swiper/modules"

export const Carrousel = () => {
  const imagesPaths = [
    "/images/carrousel/carr2.png",
    "/images/carrousel/carr3.png",
    "/images/carrousel/carr4.png",
    "/images/carrousel/carr5.png",
    "/images/carrousel/carr8.png",
    "/images/carrousel/carr9.png",
    "/images/carrousel/carr10.png",
    "/images/carrousel/carr11.png",
    "/images/carrousel/carr2.png",
    "/images/carrousel/carr3.png",
    "/images/carrousel/carr4.png",
    "/images/carrousel/carr5.png",
    "/images/carrousel/carr8.png",
    "/images/carrousel/carr9.png",
    "/images/carrousel/carr10.png",
    "/images/carrousel/carr11.png",
  ]

  return (
    <Swiper
      slidesPerView={
        window.innerWidth <= 768 ? 1.5 : 6
      }
      spaceBetween={
        window.innerWidth <= 768 ? 10 : 20
      }
      loop={true}
      className="w-full continuous-swipe"
    >
      {imagesPaths.map((imagePath, index) => (
        <SwiperSlide
          key={index}
          className="flex justify-center items-center swiper-slide"
        >
          <Image
            width={300}
            height={300}
            src={imagePath}
            alt="carrousel"
            className="block w-[250px] h-[400px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
