import { useTranslations } from "next-intl"
import profilePic from "@/images/message/profile.jpg"
import Image from "next/image"
import logoBg from "@/images/logo.png"
import './Message.scss'
export default function Message() {
    const t = useTranslations('Message')
    return (<>
        <article className="letter-wrapper">
            <div className="aside-section">
                <p>{t('introduction1')}</p>
                <br />
                <p>{t('introduction2')}</p>
                <br />
                <p>{t('development1')}</p>
            </div>
            <div className="aside-img-wrapper">
                <Image
                    src={profilePic}
                    alt="Burak Durul"
                    className="aside-img"
                />
            </div>
            <div className="rest-text">
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
            <Image src={logoBg} alt="Logo Background" quality={10} className="letter-bg-img" />
        </article>

    </>)
}