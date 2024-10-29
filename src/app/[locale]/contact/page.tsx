import Cards from "@/app/components/contact/Cards"
import Form from "@/app/components/contact/Form"
import Map from "@/app/components/contact/Map"
import Header from "@/app/components/Header"
import { useTranslations } from "next-intl"

export default function Contact() {
    const t = useTranslations('Contact')
    return (<>
        <Header title={t('title')} />
        <Cards />
        <Form />
    </>)
}