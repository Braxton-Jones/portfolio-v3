'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'


export default function CustomNavbar() {
    return (
        <NavigationMenu className="font-montserrat ">
            <NavigationMenuList>
                <NavigationMenuItem className='flex justify-center'>
                    <NavigationMenuTrigger className='bg-colorone w-full '>Menu</NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col text-sm">
                        <NavigationMenuLink 
                        href='/about'
                        className='px-4 py-2 text-center text-1xl font-medium bg-slate-300'
                        >
                            About
                        </NavigationMenuLink> 
                        <NavigationMenuLink 
                        href="/blog"
                        className='px-4 py-2 text-center text-1xl font-medium bg-slate-300'
                        >
                            Blog
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
