import { dbConnect } from "@/lib/db";
import Session from "@/utils/models/Sessions";

export const getSessionInfo = async (userId: string) => {
  try {
    await dbConnect();

    const sessionInfo = await Session.find({ user_id: userId });
    console.log("session info => ", userId, sessionInfo);

    return {
      ok: true,
      status: 200,
      message: "اطلاعات نشست با موفقیت پیدا شد",
      data: JSON.stringify(sessionInfo),
    };
  } catch (error) {
    console.log("Error while getting session info => ", error);
    return {
      ok: false,
      status: 400,
      message: "خطایی در گرفتن اطلاعات نشست رخ داد",
    };
  }
};
