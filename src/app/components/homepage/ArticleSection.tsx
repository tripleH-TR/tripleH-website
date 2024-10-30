import { useTranslations } from "next-intl";
import AnimatedSection from "../AnimatedComponent";
import Image from "next/image";
import leftImage from "@/images/article/article-left.jpg";
import rightImage from "@/images/article/article-right.jpg";
import logoBlack from "@/images/logo.png"
import './ArticleSection.scss'

interface Article {
    title: string;
    description: string;
}

export default function ArticleSection() {
    const t = useTranslations('Home');
    const articles = t.raw('articles') as Article[];

    return (<>

        <header>
            <AnimatedSection
                shouldShowInView
                from="top"
                duration={3000}
                className="header-wrapper">
                <h3 className="header-slogan">{t('slogan')}</h3>
                <Image
                    src={logoBlack}
                    alt="logo"
                    width={300}
                    height={300}
                    className="header-logo"
                />
                <h1 className="hidden">{t('title')}</h1>
            </AnimatedSection>
        </header>

        <article className="article-section">

            <AnimatedSection
                className="article-card-wrapper"
                shouldShowInView
                from='left'
                duration={2000}
                hFull>

                <div className="image-wrapper">
                    <Image
                        className="image"
                        src={leftImage}
                        alt="Article 1 Image"
                    />
                </div>

                <div className="text-wrapper">
                    <h4 className="text-center">{articles[0].title}</h4>
                    <p>{articles[0].description}</p>
                </div>

            </AnimatedSection>

            <AnimatedSection
                className="article-card-wrapper"
                shouldShowInView
                from='right'
                duration={2000}
                hFull>

                <div className="text-wrapper secondary">
                    <h4 className="text-center">{articles[1].title}</h4>
                    <p>{articles[1].description}</p>
                </div>

                <div className="image-wrapper secondary">
                    <Image
                        className="image"
                        src={rightImage}
                        alt="Article 1 Image"
                    />
                </div>

            </AnimatedSection>
        </article>
    </>)
}