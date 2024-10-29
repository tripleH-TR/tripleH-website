import { useTranslations } from "next-intl";
import AnimatedSection from "../AnimatedComponent";
import Image from "next/image";
import leftImage from "@/images/article/article-left.jpg";
import rightImage from "@/images/article/article-right.jpg";
import logoBlack from "@/images/logo.png"

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
                className="mt-5 flex flex-col justify-center items-center">
                <h3 className="pt-4">{t('slogan')}</h3>
                <Image
                    src={logoBlack}
                    alt="logo"
                    width={300}
                    height={300}
                    className="w-auto mt-[-50px]"
                />
                <h1 className="hidden text-center underline underline-offset-8 decoration-alternatebright drop-shadow-2xl">{t('title')}</h1>
            </AnimatedSection>
        </header>

        <article className="flex flex-col gap-5 mb-10 max-w-7xl items-center mx-auto">

            <AnimatedSection
                className="p-4 shadow-2xl rounded-lg grid grid-cols-1 md:grid-cols-3"
                shouldShowInView
                from='left'
                duration={2000}
                hFull>

                <div className="md:col-span-2">
                    <Image
                        className="rounded-lg shadow-2xl"
                        src={leftImage}
                        alt="Article 1 Image"
                    />
                </div>

                <div className="flex flex-col justify-center m-4 gap-3 col-span-1">
                    <h4 className="text-center">{articles[0].title}</h4>
                    <p>{articles[0].description}</p>
                </div>

            </AnimatedSection>

            <AnimatedSection
                className="p-4 shadow-2xl rounded-lg grid grid-cols-1 md:grid-cols-3"
                shouldShowInView
                from='right'
                duration={2000}
                hFull>

                <div className="flex flex-col justify-center m-4 gap-3 col-span-1 md:col-start-1 row-start-2 md:row-start-1">
                    <h4 className="text-center">{articles[1].title}</h4>
                    <p>{articles[1].description}</p>
                </div>

                <div className="md:col-span-2  md:col-start-2 row-start-1">
                    <Image
                        className="rounded-lg"
                        src={rightImage}
                        alt="Article 1 Image"
                    />
                </div>

            </AnimatedSection>
        </article>
    </>)
}