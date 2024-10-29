import historyImage from '@/images/institutional/history.jpg'
import missionImage from '@/images/institutional/mission.jpg'
import visionImage from '@/images/institutional/vision.jpg'
import { ClockIcon, GlobeAltIcon, StarIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import AnimatedSection from '../AnimatedComponent'

export default function InstitutionalMain() {
    const t = useTranslations('About')
    return (<>
        <section className="my-10 flex flex-col gap-10 min-h-screen">
            {/* TARIHCE */}
            <AnimatedSection
                from='left'
                duration={2000}
                shouldShowInView
                hFull
                className='h-full'
            >
                <article className="grid grid-cols-1 md:grid-cols-4 drop-shadow-2xl h-full">
                    {/* RESIM */}
                    <div className='md:col-span-2 h-full'>
                        <Image
                            src={historyImage}
                            alt='History'
                            className='object-cover h-full w-full bg-primary'
                        />
                    </div>
                    {/* METIN */}
                    <aside className="flex flex-col justify-center items-center gap-7 bg-primary p-8 md:rounded-r-2xl">
                        <h3 className='text-secondary'>{t('history')}</h3>
                        <p className='text-secondary'>{t('historyDesc')}</p>
                    </aside>
                    {/* IKON */}
                    <div className='hidden md:flex justify-center items-center' >
                        <ClockIcon className='h-48' />
                    </div>

                </article>
            </AnimatedSection>

            {/* MISYONUMUZ */}

            <AnimatedSection
                from='right'
                duration={2000}
                shouldShowInView
                hFull
                className='h-full'
            >
                <article className="grid grid-cols-1 md:grid-cols-4 drop-shadow-2xl h-full">
                    {/* IKON */}
                    <div className='hidden md:flex justify-center items-center' >
                        <StarIcon className='text-alternatebright h-48' />
                    </div>
                    {/* METIN */}
                    <aside className="flex flex-col justify-center items-center gap-7 bg-alternatebright p-8 md:rounded-l-2xl">
                        <h3 className='text-primary'>{t('mission')}</h3>
                        <p className='text-primary'>{t('missionDesc')}</p>
                    </aside>
                    {/* RESIM */}
                    <div className='md:col-span-2 row-start-1 md:col-start-3 h-full'>
                        <Image
                            src={missionImage}
                            alt='Mission'
                            className='h-full w-full object-cover bg-alternatebright'
                        />
                    </div>
                </article>
            </AnimatedSection>

            {/* VIZYONUMUZ */}

            <AnimatedSection
                from='left'
                duration={2000}
                shouldShowInView
                hFull
                className='h-full'
            >
                <article className="grid grid-cols-1 md:grid-cols-4 drop-shadow-2xl h-full">
                    {/* RESIM */}
                    <div className='md:col-span-2 h-full'>
                        <Image
                            src={visionImage}
                            alt='vision'
                            className='h-full w-full object-cover bg-primary' />
                    </div>
                    {/* METIN */}
                    <aside className="flex flex-col justify-center items-center gap-7 bg-primary p-8 md:rounded-r-2xl">
                        <h3 className='text-secondary'>{t('vision')}</h3>
                        <p className='text-secondary'>{t('visionDesc')}</p>
                    </aside>
                    {/* IKON */}
                    <div className='hidden md:flex justify-center items-center' >
                        <GlobeAltIcon className='h-48' />
                    </div>

                </article>
            </AnimatedSection>
        </section>
    </>)
}