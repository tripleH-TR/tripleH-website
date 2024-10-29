import { useTranslations } from "next-intl"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import staticInfo from '@/locales/static.json'


export default function Cards() {
    return (<>
        <section className="grid grid-cols-2 my-5 gap-4 max-w-7xl mx-auto">
            <div className="p-5 m:p-20 flex flex-col justify-center items-center gap-4 bg-secondarydark rounded-l-3xl shadow-2xl">
                <PhoneIcon className="h-16" />
                <h6>{staticInfo.phone}</h6>
            </div>
            <div className="p-5 m:p-20 flex flex-col justify-center items-center gap-4 bg-secondarydark rounded-r-3xl  shadow-2xl">
                <EnvelopeIcon className="h-16" />
                <h6>{staticInfo.email}</h6>
            </div>
        </section>
    </>)
}