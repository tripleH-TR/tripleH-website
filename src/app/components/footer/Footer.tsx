import Image from "next/image";
import Address from "./Address";
import MailButton from "./MailtoButton";
import SocialMediaLinks from "./Socialmedia";
import bgImg from "@/images/bgimages/bg1.jpg"
import './Footer.scss'




export default function Footer() {



    return (<>
        <footer className="footer">
            <Image
                src={bgImg}
                alt="footerBackground"
                className="footer-bg-image"
                fill
            />
            <div className="footer-sub-wrapper">
                <SocialMediaLinks className="social-links" />
                <Address className='address' />
                <MailButton className='mailto-button' />

            </div>
        </footer>


    </>)
}