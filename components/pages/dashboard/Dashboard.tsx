"use client"
import { userStore } from "@/utils/stores/userStore"



const Dashboard = () => {
    const { userInfo } = userStore()
    console.log("user info => ", userInfo)

    return (
        <>{userInfo.username}</>
    )
}

export default Dashboard