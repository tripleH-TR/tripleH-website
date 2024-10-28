import { HomeModernIcon } from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon, SwatchIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const images = [
    '/images/middleBanner/bannerLeft.jpg',
    '/images/middleBanner/bannerMid.jpg',
    '/images/middleBanner/bannerRight.jpg'

]

export default function ImagesBanner() {
    return (<>
        <section className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mb-10 w-full">

            <div className="flex flex-col justify-center items-center">
                <div className="justify-center items-center text-white p-5">
                    <BuildingStorefrontIcon className="h-14 w-14 text-alternate" />
                    <p className=" text-alternate">Magaza</p>
                </div>
                <Image
                    className="h-full w-full "
                    src={images[0]}
                    alt='bannerLeft'
                    layout="responsive"
                    width={1920}
                    height={1080}
                    sizes="(max-width: 1024px) 40vw, 40vw"
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div className="relative row-span-2 md:col-start-2">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
                    <HomeModernIcon className="h-14 w-14" />
                    <p className="text-white">Mobilya</p>
                </div>
                <Image
                    className="h-full w-full aspect-square"
                    src={images[1]}
                    alt='bannerMid'
                    layout="responsive"
                    width={1920}
                    height={1080}
                    sizes="(max-width: 1024px) 40vw, 40vw"
                    style={{ objectFit: "cover" }}
                />

            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="justify-center items-center text-white p-5">
                    <SwatchIcon className="h-14 w-14  text-alternate" />
                    <p className=" text-alternate">Tasarim</p>
                </div>
                <Image
                    className="h-full w-full"
                    src={images[2]}
                    alt='bannerRight'
                    layout="responsive"
                    width={1920}
                    height={1080}
                    sizes="(max-width: 1024px) 40vw, 40vw"
                    style={{ objectFit: "cover" }}
                />
            </div>

        </section>
    </>)
}