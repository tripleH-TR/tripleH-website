import { PhoneIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl"
import { FunctionComponent } from "react";
import phone from "@/locales/static.json"
import './Footer.scss'


interface AddressProps {
    className?: string

}

const Address: FunctionComponent<AddressProps> = ({ className }) => {

    const t = useTranslations('Contact');
    return (<>
        <address className={className}>
            <h4 className="address-title">{t('title')}</h4>
            <hr className="address-line" />
            {/* <div className="address-text-wrapper">
                <MapPinIcon className="address-icons map-icon" />
                <p className="address-text">{t('address')}</p>
            </div> */}
            <div className="address-text-wrapper">
                <PhoneIcon className="address-icons phone-icon" />
                <p className="address-text">{phone.phone}</p>
            </div >
            <hr className="address-line" />
            
        </address>
    </>)
}

export default Address