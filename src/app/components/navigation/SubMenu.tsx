import { NavigationItem } from "@/type/Common";
import { useHover } from "@mantine/hooks";
import clsx from "clsx";
import Link from "next/link";

interface itemProps {
    item: NavigationItem
}

export default function SubMenu({ item }: itemProps) {
    const { hovered, ref } = useHover();

    return (<>
        <div ref={ref} key={item.name} className='subwrapper group'>
            <button
                type="button" className={clsx("sublink-button", item.isActive && "active")}
            >
                {item.name}
            </button>
            {hovered && (
                <div className="absolute left-0 w-48 origin-top-right rounded-md shadow-lg bg-gray-100 ring-1 ring-primary ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                    {/* <div className="dropdown-arrow"></div> */}
                    {item.subitems?.map((subitem) => (
                        <Link
                            key={subitem.name}
                            href={subitem.href}
                            className={clsx("sublink-item", subitem.isActive && "active")}
                        >
                            {subitem.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    </>)
}