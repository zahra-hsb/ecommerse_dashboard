"use server"
import { headers } from "next/headers"

export async function getDeviceInfo() {
    try {
        const userAgent = (await headers()).get('user-agent')
        return userAgent
    } catch(err) {
        console.log("Error while getting device info => ", err)
    }
}