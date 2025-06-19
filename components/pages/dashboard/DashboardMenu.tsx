"use client"
import Button from "@/components/globals/Button";
import { userStore } from "@/utils/stores/userStore";
import Link from "next/link";
// import { useRouter } from "next/navigation";

const menuItems = [
  { id: 0, title: "داشبورد", path: "/dashboard" },
  { id: 1, title: "محصولات", path: "/#" },
];

const DashboardMenu = () => {
    // const router = useRouter()
    const { resetAll } = userStore()
    const onExit = () => {
        resetAll()
        // router.push("/")
    }
  return (
    <>
      <ul className="flex flex-col gap-5 text-base">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link className="hover:text-gray-900/60" href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Button onClick={onExit}>خروج</Button>
    </>
  );
};

export default DashboardMenu;
