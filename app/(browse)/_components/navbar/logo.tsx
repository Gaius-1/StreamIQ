import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const Logo = () => {
    return (
        <Link href={""}>
            <div className="flex items-center gap-x-4 hover:opacity-75 transistion">
                <div className="bg-white rounded-full p-1 lg:mr-0 lg:shrink mr-10 shrink-0">
                    <Image src={"/hive.svg"} alt={"Hive"} height={32} width={32} />
                </div>
                <div className={cn("hidden lg:block", font.className)}>
                    <p className="text-lg font-semibold">Hive</p>
                    <p className="text-xs text-muted-foreground">Learn, Code & Network</p>
                </div>
            </div>
        </Link>
    )
}