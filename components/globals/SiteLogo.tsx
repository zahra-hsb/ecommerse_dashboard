import Link from "next/link";



const SiteLogo = () => {
    return (
        <Link href="/" className="flex items-center space-x-2">
            <div className="px-2 py-1 rounded-lg glass-lg flex items-center justify-center">
                <span className="gradient-text font-bold text-xl">یوتاب</span>
            </div>
        </Link>
    );
}

export default SiteLogo;