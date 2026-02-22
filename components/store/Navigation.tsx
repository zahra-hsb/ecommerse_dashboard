import Link from "next/link";
import { usePathname } from "next/navigation";


const menuItems = [
    { name: "صفحه اصلی", href: "/" },
    { name: "فروشگاه", href: "/shop" },
    { name: "درباره ما", href: "/about" },
    { name: "تماس باما", href: "/contact" },
];

const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`text-muted-foreground hover:text-primary transition-colors duration-300 ${pathname === item.href ? "text-primary" : ""}`}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    )
};

export default Navigation;