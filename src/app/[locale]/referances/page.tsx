import Header from "@/app/components/Header";
import References from "@/app/components/referances/Referances";
import { useTranslations } from "next-intl";

export default function Referances() {
    const t = useTranslations('Referances')
    return (<>
        <Header title={t('title')} />
        <References />
    </>)
}