import { HomeModernIcon } from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon, SwatchIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import bannerLeftImg from "@/images/middleBanner/bannerLeft.jpg"
import bannerMidImg from "@/images/middleBanner/bannerMid.jpg"
import bannerRightImg from "@/images/middleBanner/bannerRight.jpg"
import { useTranslations } from "next-intl";


export default function ImagesBanner() {
    const images = [bannerLeftImg, bannerMidImg, bannerRightImg]
    const h = useTranslations('Home');
    const t = h.raw('middleBanner');

    return (<>
        <section className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mb-10 w-full">

            <div className="relative flex flex-col justify-center items-center">
                <div className="absolute md:relative inset-0 flex flex-col justify-center items-center text-white z-10 p-5">
                    <BuildingStorefrontIcon className="h-14 w-14 text-secondary md:text-alternate" />
                    <p className=" text-secondary md:text-alternate">{t.leftIconText}</p>
                </div>
                <Image
                    className="h-full w-full object-cover brightness-50 md:brightness-75"
                    src={images[0]}
                    alt='bannerLeft'
                />
            </div>

            <div className="relative row-span-2 md:col-start-2">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
                    <HomeModernIcon className="h-14 w-14" />
                    <p className="text-white">{t.middleIconText}</p>
                </div>
                <Image
                    className="h-full w-full object-cover aspect-square brightness-50 md:brightness-75"
                    src={images[1]}
                    alt='bannerMid'
                />
            </div>

            <div className="relative flex flex-col justify-center items-center">
                <div className="absolute md:relative inset-0 flex flex-col justify-center items-center text-white z-10 p-5">
                    <SwatchIcon className="h-14 w-14  text-secondary md:text-alternate" />
                    <p className=" text-secondary md:text-alternate">{t.rightIconText}</p>
                </div>
                <Image
                    className="h-full w-full object-cover brightness-50 md:brightness-75"
                    src={images[2]}
                    alt='bannerRight'
                />
            </div>

        </section>
    </>)
}