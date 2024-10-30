import { HomeModernIcon } from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon, SwatchIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import bannerLeftImg from "@/images/middleBanner/bannerLeft.jpg"
import bannerMidImg from "@/images/middleBanner/bannerMid.jpg"
import bannerRightImg from "@/images/middleBanner/bannerRight.jpg"
import { useTranslations } from "next-intl";
import './ImagesBanner.scss'


export default function ImagesBanner() {
    const images = [bannerLeftImg, bannerMidImg, bannerRightImg]
    const h = useTranslations('Home');
    const t = h.raw('middleBanner');

    return (<>
        <section className="banner-main-wrapper">

            <div className="banner-sub-wrapper-side">
                <div className="banner-icon-section-side">
                    <BuildingStorefrontIcon className="banner-icon" />
                    <p className="banner-text">{t.leftIconText}</p>
                </div>
                <Image
                    className="banner-side-image"
                    src={images[0]}
                    alt='bannerLeft'
                />
            </div>

            <div className="banner-sub-wrapper-center">
                <div className="banner-icon-section-center">
                    <HomeModernIcon className="banner-icon-center" />
                    <p className="banner-text-center">{t.middleIconText}</p>
                </div>
                <Image
                    className="banner-center-image"
                    src={images[1]}
                    alt='bannerMid'
                />
            </div>

            <div className="banner-sub-wrapper-side">
                <div className="banner-icon-section-side">
                    <SwatchIcon className="banner-icon" />
                    <p className="banner-text">{t.rightIconText}</p>
                </div>
                <Image
                    className="banner-side-image"
                    src={images[2]}
                    alt='bannerRight'
                />
            </div>

        </section>
    </>)
}