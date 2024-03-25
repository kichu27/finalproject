
import { NextResponse } from "next/server";
import Connect from "@/lib/dbconn";
import {Notification} from "@/models/Notification"; 

export async function POST(request) {
  try {
  
    await Connect();

   
    const { msg } = await request.json();

    const notification = await Notification.create({ message: msg });

  
    if (notification) {
      return NextResponse.json({ msg: "Successfully stored notification!" });
    } else {
      return NextResponse.json({ msg: "Failed to store notification!" });
    }
  } catch (error) {
   
    console.error(error);
    return NextResponse.json({ msg: "Failed to store notification!" });
  }
}
