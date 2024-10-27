interface NavigationItem {
    name: string
    href?: string
    isActive?: boolean
}

export interface Navigation {
    items: NavigationItem[]
}