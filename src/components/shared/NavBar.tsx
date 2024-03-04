"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavBar() {
  const pathname = usePathname()

  return <>
    <div className={"border-b"}>
      <div className={"flex h-16 px-4"}>
        <NavigationMenu>
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

      </div>
    </div>
  </>
}