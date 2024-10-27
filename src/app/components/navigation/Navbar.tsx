"use client"

import { Disclosure } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Navigation as NavigationType } from '@/type/Common'
import Navigation from './Navigation'



interface NavbarProps {
    locale: string
}

const Navbar = ({ locale }: NavbarProps) => {
    const t = useTranslations('Nav')
    const pathname = usePathname()

    const navigation = {
        items: [
            { name: t('Home'), href: `/${locale}`, isActive: pathname === `/${locale}` },
            { name: t('Institutional'), href: `/${locale}/institutional`, isActive: pathname.includes(`institutional`) },
            { name: t('Referances'), href: `/${locale}/referances`, isActive: pathname.includes(`referances`) },
            { name: t('Contact'), href: `/${locale}/contact`, isActive: pathname.includes(`contact`) },
        ]
    } as NavigationType;

    return (
        <Disclosure as="nav" className="bg-primary sticky top-0 z-50 p-4">
            {({ open, close }: { open: boolean, close: () => void }) => (
                <>
                    <Navigation onClose={() => close()} navigation={navigation} open={open} />
                </>
            )}
        </Disclosure>
    )
}

export default Navbar