import Login from "@/components/pages/login/Login";
import ThemeToggle from "@/components/globals/ThemeToggle";

export default function LoginPage() {
  return (
   <div className="flex items-center justify-center min-h-screen w-screen bg-color-background">
     {/* Theme Toggle */}
     <div className="absolute top-4 right-4">
       <ThemeToggle />
     </div>
     <Login />
   </div>
  );
}
