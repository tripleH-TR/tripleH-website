import { EnvelopeIcon } from "@heroicons/react/24/solid";
import mail from "@/locales/static.json"


interface MailButtonProps {
    className: string
}


export default function MailButton({ className }: MailButtonProps) {

    return (
        <a
            type="button"
            href={`mailto:${mail.email}`}
            className={className}
        >
            <EnvelopeIcon className="h-5 w-5" />
            <span>{mail.email}</span>
        </a>
    );
}