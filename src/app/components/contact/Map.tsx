export default function Map() {
    return (<>
        <div className="md:col-span-2 flex h-full w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97485.70348675306!2d28.949889024004314!3d40.221779861845526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1582d8d45695%3A0x61a00555fc973392!2sBursa!5e0!3m2!1str!2str!4v1730223805378!5m2!1str!2str"
                loading="lazy"
                height={300}
                className=" w-full shadow-lg ">
            </iframe>
        </div>
    </>)
}