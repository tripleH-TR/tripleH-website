import { ShieldCheckIcon } from "@heroicons/react/16/solid";
import { FireIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";
import rightImg from "@/images/subArticle/rightimg.jpg"
import leftImg from "@/images/subArticle/leftImg.jpg"
import './SubArticle.scss'

export default function SubArticle() {
    const h = useTranslations('Home');
    const t = h.raw('subArticle'); // Artık doğrudan nesne olarak alıyoruz

    return (
        <article className="subArticle-main-wrapper">

            <div className="subArticle-image-section">
                <div className="icon-wrapper left">
                    <ShieldCheckIcon className="subarticle-image-icon" />
                </div>
                <Image
                    src={leftImg}
                    alt="SubArticle Main"
                    className="subarticle-image left"
                />
            </div>

            <div className="subArticle-main-section top">
                <SparklesIcon className="subarticle-main-icon-top" />
                <h3 className="heading">{t.topTitle}</h3>
                <p className="text">{t.topDescription}</p>
            </div>

            <div className="subArticle-image-section" >
                <div className="icon-wrapper right">
                    <FireIcon className="subarticle-image-icon" />
                </div>
                <Image
                    src={rightImg}
                    alt="SubArticle Right"
                    className="subarticle-image right"
                />
            </div>

            <div className="subArticle-main-section bottom">
                <UserGroupIcon className="subarticle-main-icon-bottom" />
                <h3 className="heading">{t.botTitle}</h3>
                <p className="text">{t.botDescription}</p>
            </div>

        </article>
    );
}
