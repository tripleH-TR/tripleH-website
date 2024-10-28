"use client"

import React from 'react'
import './MainCarousel.scss'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function MainCarousel() {
    const images = [
        '/images/maincarousel/carousel1.jpg',
        '/images/maincarousel/carousel2.jpg',
        '/images/maincarousel/carousel3.jpg'
    ]

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
                        className='max-h-[calc(100vh-64px)]'
                        src={src}
                        alt={`Legend ${index + 1}`}
                        height={1080}
                        width={1920}
                        quality={50}
                        sizes="(max-width: 500px) 50vw,(max-width: 1024px) 60vw, 70vw"
                        priority={Boolean([0, 1].includes(index))}
                    />
                </div>
            ))}
        </Carousel>
    )
}
