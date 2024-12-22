"use client"

import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const {setTheme} = useTheme();

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
                <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                <Moon className="size-[1.2rem] absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                <span className="sr-only">Toogle theme</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={()=> setTheme("light")}>
                Terang
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=> setTheme("dark")}>
                Gelap
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=> setTheme("system")}>
                Sistem
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

}