export const dynamic = 'force-dynamic'
import { NextResponse } from "next/server";
import Connect from "@/lib/dbconn";
import { User } from "@/models/usermodel";
import getdatafromtoken from "@/app/helpers/getdatafromtoken";
import { Issue } from "@/models/ComIsu";
export async function POST(request) {
  try {
    await Connect();
    const userId = await getdatafromtoken();
    const { data } = await request.json();
    const issue = await Issue.findOne({ _id: data });

    const alreadyLikedIndex = issue.likes.findIndex(like => like.user.toString() === userId);

    if (alreadyLikedIndex !== -1) {

      issue.likes.splice(alreadyLikedIndex, 1);
      await issue.save();
      
      return NextResponse.json({ message: "User's like removed from the issue." });
    }
    
    issue.likes.push({ user: userId });
    await issue.save();

    return NextResponse.json({ message: "ID added to user's likes." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Error: error });
  }
}

