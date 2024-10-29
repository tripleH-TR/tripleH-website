import Header from "@/app/components/Header";
import { useTranslations } from "next-intl";
import headerBgImage from '@/images/institutional/header.jpg'
import InstitutionalMain from "@/app/components/institutional/InstitutionalMain";

export default function Institutional() {
    const t = useTranslations('About')

    return (<>
        <Header bgImage={headerBgImage} title={t('title')} />
        <InstitutionalMain />
    </>)
}