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
    const user = await User.findById(userId)

    const { data } = await request.json();
    const issue = await Issue.findOne({ _id: data });

    const alreadyLikedIndex = issue.saves.findIndex(like => like.user.toString() === userId);

    if (alreadyLikedIndex !== -1) {

      issue.saves.splice(alreadyLikedIndex, 1);
      await issue.save();
      
      return NextResponse.json({ message: "User's saved removed from the issue." });
    }
    
    issue.saves.push({ user: userId });
    await issue.save();

    return NextResponse.json({ message: "ID added to user's saves." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Error: error });
  }

}

