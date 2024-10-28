import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl"
import { FunctionComponent } from "react";
import phone from "@/locales/static.json"


interface AddressProps {
    className?: string

}

const Address: FunctionComponent<AddressProps> = ({ className }) => {

    const t = useTranslations('Contact');
    return (<>
        <address className={className}>
            <h4 className="text-secondarydark text-center uppercase">{t('title')}</h4>
            <hr className="border-alternate" />
            <div className="flex">
                <MapPinIcon className="text-white h-10 w-10 mr-3" />
                <p className="text-secondarydark text-lg font-medium">{t('address')}</p>
            </div>
            <hr className="border-alternate" />
            <div className="flex">
                <PhoneIcon className="text-white h-5 w-5 mr-3" />
                <p className="text-secondarydark text-lg font-medium">{phone.phone}</p>
            </div >
        </address>
    </>)
}

export default Address