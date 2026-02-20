import Link from "next/link";


const menuItems = [
    { name: "فروشگاه", href: "/shop" },
    { name: "درباره ما", href: "/about" },
    { name: "تماس باما", href: "/contact" },
];

const Navigation = () => {
    return (
        <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    )
};

export default Navigation;