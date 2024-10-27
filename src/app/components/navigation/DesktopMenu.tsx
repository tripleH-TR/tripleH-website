"use client"

import "./DesktopMenu.scss"
import clsx from "clsx"
import Link from 'next/link'
import { Navigation } from "@/type/Common"


interface DesktopMenuProps {
    navigation: Navigation
}

const DesktopMenu = ({ navigation }: DesktopMenuProps) => {
    return (
        <div className={clsx("desktop-menu")}>
            <div className="wrapper">
                {navigation.items.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href ?? "#"}
                        className={clsx("link-item", item.isActive && "active")}
                    >
                        {item.name}
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default DesktopMenu
