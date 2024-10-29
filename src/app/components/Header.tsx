import image from '@/images/bgimages/bg1.jpg'
import Image, { StaticImageData } from 'next/image';
import AnimatedSection from './AnimatedComponent';

interface HeaderProps {
    title: string;
    fromDirection?: "left" | "right" | "top" | "bottom";
    duration?: number;
    bgImage?: StaticImageData;
}

export default function Header({
    title,
    fromDirection = "top",
    duration = 2000,
    bgImage = image }: HeaderProps) {

    return (<>
        <header className='relative w-full h-40 flex items-center justify-center '>
            <Image
                src={bgImage}
                alt='header background image'
                className='brightness-50 blur-[2px] object-cover'
                fill
            />
            <AnimatedSection
                className='flex flex-col items-center justify-center absolute inset-0 z-10'
                from={fromDirection}
                duration={duration}
                shouldShowInView
            >
                <h2 className='relative drop-shadow-2xl text-secondary font-light after:block after:bg-alternatebright after:h-[3px] after:w-1/2 after:mt-4 after:mx-auto after:rounded-full'>{title}</h2>
            </AnimatedSection>

        </header>
    </>)


}