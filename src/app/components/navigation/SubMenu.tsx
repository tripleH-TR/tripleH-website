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
        <div ref={ref} key={item.name} className='subwrapper'>
            <button
                type="button" className={clsx("sublink-button", item.isActive && "active")}
            >
                {item.name}
            </button>
            {hovered && (
                <div className="absolute left-0 w-44 origin-top-left rounded-md shadow-lg bg-secondary ring-1 ring-primary animate-fadeIn ring-opacity-5 flex flex-col gap-2 justify-center p-2">
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