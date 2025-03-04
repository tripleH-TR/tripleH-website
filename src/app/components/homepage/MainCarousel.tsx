"use client"

import React from 'react'
import './MainCarousel.scss'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import carouselImg1 from "@/images/maincarousel/carousel1.jpg"
import carouselImg2 from "@/images/maincarousel/carousel2.jpg"
import carouselImg3 from "@/images/maincarousel/carousel3.jpg"
import carouselImg3 from "@/images/maincarousel/carousel4.jpg"

export default function MainCarousel() {
    const images = [carouselImg1, carouselImg2, carouselImg3]

    return (
        <Carousel
            className='flex'
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            renderArrowPrev={(onClick) => (
                <div onClick={onClick} className='control left'>
                    <ChevronLeftIcon className='w-6 h-6' />
                </div>
            )}
            renderArrowNext={(onClick) => (
                <div onClick={onClick} className='control right'>
                    <ChevronRightIcon className='w-6 h-6' />
                </div>
            )}
        >
            {images.map((src, index) => (
                <div key={index} className='relative h-full w-full'>
                    <Image
                        className='max-h-[calc(100vh-96px)] object-cover'
                        src={src}
                        alt={`Legend ${index + 1}`}
                        priority={Boolean([0, 1].includes(index))}
                    />
                </div>
            ))}
        </Carousel>
    )
}
