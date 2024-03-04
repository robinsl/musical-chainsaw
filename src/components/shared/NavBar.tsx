"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import {StyleToggle} from "@/components/shared/StyleToggle";

export default function NavBar() {
  const pathname = usePathname()

  return <>
    <div className={"border-b"}>
      <div className={"flex h-16 px-4 items-center"}>
        <img src={"https://help.kagi.com/assets/doggo_1.b29ed36f.png"} className={"inline-flex h-16"}/>
        <NavigationMenu className={"px-4"}>
          <NavigationMenuList className={"space-x-4 lg:space-x-6"}>
            <NavigationMenuItem className={pathname === "/" ? "" : "text-muted-foreground"}>
              <Link href={"/"}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className={pathname === "/todo" ? "" : "text-muted-foreground"}>
              <Link href={"/todo"}>
                Todo
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className={"ml-auto flex items-center space-x-4"}>
          <StyleToggle/>
        </div>
      </div>

    </div>
  </>
}