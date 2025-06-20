"use client";
import Card from "@/components/globals/Card";
import { userStore } from "@/utils/stores/userStore";

const Dashboard = () => {
  const { userInfo } = userStore();
  console.log("user info => ", userInfo);

  return (
    <section>
      <Card>{userInfo.username}</Card>
    </section>
  );
};

export default Dashboard;
