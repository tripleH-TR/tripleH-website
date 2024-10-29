import { useTranslations } from "next-intl"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import staticInfo from '@/locales/static.json'
import Map from "./Map"

export default function Cards() {
    const t = useTranslations('Contact')
    return (<>
        <section className="grid md:grid-cols-2 my-5 gap-4 max-w-7xl mx-auto">

            <address className="md:col-span-2 p-20 bg-primarylighter rounded-t-3xl shadow-2xl flex flex-col justify-center items-center gap-4">
                <MapPinIcon className="text-secondary h-16" />
                <h3 className=" text-secondary after:block after:bg-alternatebright after:h-[3px] after:w-1/2 after:mt-4 after:mx-auto after:rounded-full">{t('subTitle')}</h3>
                <p className="text-secondary text-xl">{t('address')}</p>
            </address>

            <Map />

            <div className="p-20 flex flex-col justify-center items-center gap-4 bg-secondarydark md:rounded-bl-3xl shadow-2xl">
                <PhoneIcon className="h-16" />
                <h6>{staticInfo.phone}</h6>
            </div>

            <div className="p-20 flex flex-col justify-center items-center gap-4 bg-secondarydark  md:rounded-br-3xl shadow-2xl">
                <EnvelopeIcon className="h-16" />
                <h6>{staticInfo.email}</h6>
            </div>
        </section>
    </>)
}