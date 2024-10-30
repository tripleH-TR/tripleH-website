"use client"

import "./DesktopMenu.scss"
import clsx from "clsx"
import Link from 'next/link'
import { Navigation } from "@/type/Common"
import SubMenu from "./SubMenu"



interface DesktopMenuProps {
    navigation: Navigation
}

const DesktopMenu = ({ navigation }: DesktopMenuProps) => {
    return (
        <div className={clsx("desktop-menu")}>
            <div className="wrapper">
                {navigation.items.map((item) => (
                    item.href ? (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx("link-item", item.isActive && "active")}
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <SubMenu item={item} key={item.name} />
                    )
                ))}

            </div>
        </div>
    )
}

export default DesktopMenu
