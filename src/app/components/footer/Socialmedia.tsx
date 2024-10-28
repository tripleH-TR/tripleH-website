import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function SocialMediaLinks() {

    const t = useTranslations('Contact')
    return (<>
        <div className="flex flex-row justify-between z-10 gap-3">
            <a
                aria-label="Facebook"
                href={t('facebook')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
                <FaFacebook className="flex-none w-6 h-6" />
            </a>
            <a
                aria-label="Instagram"
                href={t('instagram')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transition duration-300"
            >
                <FaInstagram className="flex-none w-6 h-6" />
            </a>
            <a
                aria-label="LinkedIn"
                href={t('linkedin')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition duration-300"
            >
                <FaLinkedin className="flex-none w-6 h-6" />
            </a>
            <a
                aria-label="WhatsApp"
                href={t('whatsapp')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700 transition duration-300"
            >
                <FaWhatsapp className="flex-none w-6 h-6" />
            </a>
        </div>
    </>)
}