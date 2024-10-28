import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

interface MailButtonProps {
    className: string
}

export default function MailButton({ className }: MailButtonProps) {
    const t = useTranslations('Contact');
    return (
        <a
            href={`mailto:${t('email')}`}
            className={className}
        >
            <EnvelopeIcon className="h-5 w-5" />
            <span>{t('email')}</span>
        </a>
    );
}