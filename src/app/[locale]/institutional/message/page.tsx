import Header from "@/app/components/Header"
import Message from "@/app/components/institutional/Message"
import { useTranslations } from "next-intl"

export default function Massage() {
    const t = useTranslations('Message')

    return (<>
        <Header title={t('title')} />
        <Message />
    </>)
}