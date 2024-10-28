import Address from "./address";
import MailButton from "./mailtoButton";
import SocialMediaLinks from "./socialmedia";




export default function Footer() {



    return (<>
        <footer className="w-full p-10 bg-[url('/images/bgimages/bg1.jpg')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-7 z-10">
                <SocialMediaLinks />
                <Address className=' flex flex-col gap-4 z-10 flex-[0.50]' />
                <MailButton className='flex items-center space-x-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primarylighter transition duration-300 z-10' />

            </div>
        </footer>


    </>)
}