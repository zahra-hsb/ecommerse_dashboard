"use client";
import Card from "@/components/globals/Card";
import { userStore } from "@/utils/stores/userStore";

const Dashboard = () => {
  const { userInfo } = userStore();
  console.log("user info => ", userInfo);

  return (
    <section className="w-full flex flex-col gap-10">
      <Card className="w-full ">سلام {userInfo.fName} به داشبورد خوش آمدید.</Card>
      <div className="flex gap-10 w-full">
        <Card className="w-full">
            <h2>امار فروش امروز</h2>
        </Card>
        <Card className="w-full">
            <h2>امار فروش یک ماه اخیر</h2>
        </Card>
      </div>
      <Card className="h-[50vh] max-h-[50vh]">
        <h2>سفارشات امروز</h2>
      </Card>
    </section>
  );
};

export default Dashboard;
