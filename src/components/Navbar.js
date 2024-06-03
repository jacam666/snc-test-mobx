"use client"

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function MyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const router = useRouter();

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Proteins", path: "/protein" },
        { name: "Pre-Workouts", path: "/preworkout" },
        { name: "Fat Loss", path: "/fatBurners" },
        { name: "Wellbeing", path: "/wellBeing" },
        { name: "Training Plans", path: "/trainingPlans" },
        { name: "Studio", path: "/studio" },
        { name: "Basket", path: "/basket" },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">UKSnc</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map(item => (
                    <NavbarItem key={item.path} isActive={router.pathname === item.path}>
                        <Link href={item.path} 
                                aria-current={router.pathname === item.path ? "page" : undefined}
                                style={{color: router.pathname === item.path ? "red" : "black"}}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            // color={
                            //     index === 5 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            // }
                            className="w-full"
                            href={item.path}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
