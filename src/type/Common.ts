interface NavigationItem {
    name: string
    href?: string
    isActive?: boolean
    subitems?: {
        name: string
        href: string
        isActive?: boolean
    }[]
}

export interface Navigation {
    items: NavigationItem[]
}