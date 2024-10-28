import { ShieldCheckIcon } from "@heroicons/react/16/solid";
import { FireIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";
import rightImg from "@/images/subArticle/rightimg.jpg"
import leftImg from "@/images/subArticle/leftImg.jpg"

export default function SubArticle() {
    const h = useTranslations('Home');
    const t = h.raw('subArticle'); // Artık doğrudan nesne olarak alıyoruz

    return (
        <article className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 max-w-7xl relative mb-10 ">

            <div className="col-span-1 md:row-span-2 h-full relative ">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 md:rounded-l-full">
                    <ShieldCheckIcon className="h-20 w-20 text-alternatebright" />
                </div>
                <Image
                    src={leftImg}
                    alt="SubArticle Main"
                    width={300}
                    height={300}
                    className="h-full md:rounded-l-full relative flex w-full object-cover"
                />
            </div>

            <div className="flex flex-col justify-between items-center gap-2 h-full relative bg-alternatebright text-secondary p-10">
                <SparklesIcon className="h-10 w-10" />
                <h3 className="mb-3 text-secondary">{t.topTitle}</h3>
                <p className="text-secondary">{t.topDescription}</p>
            </div>

            <div className="md:row-span-2 h-full relative" >
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 md:rounded-r-full">
                    <FireIcon className="h-20 w-20 text-alternatebright" />
                </div>
                <Image
                    src={rightImg}
                    alt="SubArticle Right"
                    // width={300}
                    // height={300}
                    className="h-full md:rounded-r-full relative flex w-auto object-cover"
                />
            </div>

            <div className="flex flex-col justify-between items-center gap-2 h-full relative bg-secondary p-10 text-alternatebright">
                <UserGroupIcon className="h-10 w-10 text-alternatebright" />
                <h3 className="mb-3 text-primary">{t.botTitle}</h3>
                <p className="text-primary">{t.botDescription}</p>
            </div>

        </article>
    );
}
