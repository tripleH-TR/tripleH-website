import historyImage from '@/images/institutional/history.jpg'
import missionImage from '@/images/institutional/mission.jpg'
import visionImage from '@/images/institutional/vision.jpg'
import { ClockIcon, GlobeAltIcon, StarIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import AnimatedSection from '../AnimatedComponent'
import './Institutional.scss'

export default function InstitutionalMain() {
    const t = useTranslations('About')
    return (<>
        <section className="about-main">
            {/* TARIHCE */}
            <AnimatedSection
                from='left'
                duration={2000}
                shouldShowInView
                hFull
                className='h-full'
            >
                <article className="left-card">
                    {/* RESIM */}
                    <div className='left-img-wrapper'>
                        <Image
                            src={historyImage}
                            alt='History'
                            className='left-img'
                        />
                    </div>
                    {/* METIN */}
                    <aside className="left-aside">
                        <h3 className='left-heading'>{t('history')}</h3>
                        <p className='left-text'>{t('historyDesc')}</p>
                    </aside>
                    {/* IKON */}
                    <div className='left-icon-wrapper' >
                        <ClockIcon className='left-icon' />
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
                <article className="right-card">
                    {/* IKON */}
                    <div className='right-icon-wrapper' >
                        <StarIcon className='right-icon' />
                    </div>
                    {/* METIN */}
                    <aside className="right-aside">
                        <h3 className='right-heading'>{t('mission')}</h3>
                        <p className='right-text'>{t('missionDesc')}</p>
                    </aside>
                    {/* RESIM */}
                    <div className='right-img-wrapper'>
                        <Image
                            src={missionImage}
                            alt='Mission'
                            className='right-img'
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
                <article className="left-card">
                    {/* RESIM */}
                    <div className='left-img-wrapper'>
                        <Image
                            src={visionImage}
                            alt='vision'
                            className='left-img' />
                    </div>
                    {/* METIN */}
                    <aside className="left-aside">
                        <h3 className='left-heading'>{t('vision')}</h3>
                        <p className='left-text'>{t('visionDesc')}</p>
                    </aside>
                    {/* IKON */}
                    <div className='left-icon-wrapper' >
                        <GlobeAltIcon className='left-icon' />
                    </div>

                </article>
            </AnimatedSection>
        </section>
    </>)
}