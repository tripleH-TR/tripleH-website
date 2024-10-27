"use client"

import "./MobileMenu.scss"
import { Disclosure, DisclosureButton } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Link from 'next/link'
import { Navigation } from '@/type/Common'



interface MobileMenuProps {
    open: boolean
    navigation: Navigation

}

const MobileMenu = ({ open, navigation }: MobileMenuProps) => {

    return (
        <div className={clsx("mobile-menu", open ? "max-h-[450px]" : "max-h-0")}>
            <div className="wrapper">
                {navigation.items.map((item) => (
                    <div key={item.name}>
                        <Link
                            href={item.href ?? "#"}
                            className={clsx("link-item", item.isActive && "active")}
                        >
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileMenu