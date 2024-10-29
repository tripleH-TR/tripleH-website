import { useTranslations } from "next-intl"
import profilePic from "@/images/message/profile.jpg"
import Image from "next/image"

export default function Message() {
    const t = useTranslations('Message')
    return (<>
        <article className="grid col-span-1 md:grid-col-3 max-w-4xl my-10 gap-4 shadow-2xl p-5 opacity-0 animate-fadeIn h-full rounded-3xl">
            <div className="md:col-span-2 p-5 flex flex-col justify-center h-full">
                <p>{t('introduction1')}</p>
                <br />
                <p>{t('introduction2')}</p>
                <br />
                <p>{t('development1')}</p>
            </div>
            <div className="md:col-span-1 flex flex-col justify-center h-full">
                <Image
                    src={profilePic}
                    alt="Burak Durul"
                    className="object-contain h-full w-full"
                />
            </div>
            <div className="md:col-span-3 p-5 flex flex-col justify-center h-full">
                <p>{t('development2')}</p>
                <br />
                <p>{t('development3')}</p>
                <br />
                <p>{t('development4')}</p>
                <br />
                <p>{t('conclusion1')}</p>
                <br />
                <p>{t('conclusion2')}</p>
                <br />
                <p>{t('conclusion3')}</p>
                <br />
            </div>

        </article>

    </>)
}