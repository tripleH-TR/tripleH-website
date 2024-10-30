import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import socialLink from "@/locales/static.json"
import { FunctionComponent } from "react";
import './Footer.scss'


interface SMLinksProps {
    className?: string

}


const SocialMediaLinks: FunctionComponent<SMLinksProps> = ({ className }) => {
    return (<>
        <div className={className}>
            <a
                aria-label="Facebook"
                href={socialLink.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="link facebook"
            >
                <FaFacebook className="media-icon" />
            </a>
            <a
                aria-label="Instagram"
                href={socialLink.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link instagram"
            >
                <FaInstagram className="media-icon" />
            </a>
            <a
                aria-label="LinkedIn"
                href={socialLink.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link linkedin"
            >
                <FaLinkedin className="media-icon" />
            </a>
            <a
                aria-label="WhatsApp"
                href={socialLink.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="link whatsapp"
            >
                <FaWhatsapp className="media-icon" />
            </a>
        </div>
    </>)
}

export default SocialMediaLinks