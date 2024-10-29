import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import socialLink from "@/locales/static.json"
export default function SocialMediaLinks() {
    return (<>
        <div className="flex flex-row justify-between z-10 gap-3">
            <a
                aria-label="Facebook"
                href={socialLink.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  transition duration-300 cursor-default"
            >
                <FaFacebook className="flex-none w-8 h-8" />
            </a>
            <a
                aria-label="Instagram"
                href={socialLink.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500  transition duration-300 cursor-default"
            >
                <FaInstagram className="flex-none w-8 h-8" />
            </a>
            <a
                aria-label="LinkedIn"
                href={socialLink.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700  transition duration-300 cursor-default"
            >
                <FaLinkedin className="flex-none w-8 h-8" />
            </a>
            <a
                aria-label="WhatsApp"
                href={socialLink.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500  transition duration-300 cursor-default"
            >
                <FaWhatsapp className="flex-none w-8 h-8" />
            </a>
        </div>
    </>)
}