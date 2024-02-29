"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface WrapperProps {
    children: React.ReactNode;
}

export const Wrapper = ({
    children,
}: WrapperProps) => {
    const { collapsed } = useSidebar((state) => state);

    return (
        <aside className={cn("fixed left-0 flex-col w-60 h-full bg-[#080d1d] border-r border-[#202E35] z-50",
                             collapsed && "w-[70px]")}>
            {children}
        </aside>
    );
};