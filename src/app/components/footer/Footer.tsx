import Image from "next/image";
import Address from "./Address";
import MailButton from "./MailtoButton";
import SocialMediaLinks from "./Socialmedia";
import bgImg from "@/images/bgimages/bg1.jpg"




export default function Footer() {



    return (<>
        <footer className="w-full relative p-10">
            <Image
                src={bgImg}
                alt="footerBackground"
                className="absolute object-cover blur-sm brightness-50"
                fill
            />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-7 z-10">
                <SocialMediaLinks />
                <Address className='flex flex-col gap-4 z-10 flex-[0.50]' />
                <MailButton className='flex items-center space-x-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primarylighter hover:scale-110 transition duration-300 z-10' />

            </div>
        </footer>


    </>)
}