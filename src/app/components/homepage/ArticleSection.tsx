import { useTranslations } from "next-intl";
import AnimatedSection from "../AnimatedComponent";
import Image from "next/image";

interface Article {
    title: string;
    description: string;
    img: string;
}

export default function ArticleSection() {
    const t = useTranslations('Home');
    const articles = t.raw('articles') as Article[];
    return (<>

        <AnimatedSection
            shouldShowInView
            from="top"
            duration={3000}
            className="m-10 col-span-1 md:col-span-2">
            <h3 className="text-center p-4">{t('slogan')}</h3>
            <h1 className="text-center underline underline-offset-8 decoration-white drop-shadow-2xl">{t('title')}</h1>
        </AnimatedSection>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 max-w-7xl">
            {articles.map((article, index) => (
                <AnimatedSection
                    key={index}
                    className="col-span-1 p-4 shadow-2xl rounded-lg h-full relative w-full "
                    shouldShowInView
                    from={index % 2 === 0 ? 'left' : 'right'}
                    duration={2000}
                    hFull>
                    <Image
                        className="rounded-lg h-full aspect-[16/9]"
                        src={article.img}
                        alt={'article1'}
                        layout="responsive"
                        width={1920}
                        height={1080}
                        sizes="(max-width: 1024px) 40vw, 40vw"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="flex flex-col justify-center m-4 gap-3">
                        <h4 className="text-center">{article.title}</h4>
                        <p>{article.description}</p>
                    </div>
                </AnimatedSection>
            ))}
        </article>
    </>)
}