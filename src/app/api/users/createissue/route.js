export const dynamic = 'force-dynamic'

import { NextResponse } from "next/server";
import Connect from "@/lib/dbconn";
import { User } from "@/models/usermodel";
import getdatafromtoken from "@/app/helpers/getdatafromtoken";
import { Issue } from "@/models/ComIsu";


export async function POST(request) {
    try {
      await Connect();
  
      const { issueContent } = await request.json();
  
      const userData = await getdatafromtoken();
  
      const user = await User.findById(userData);
      
      if (!user) {
        return NextResponse.json({ message: "No user found in issue posting!" });
      }

      if (issueContent.length <= 20) {
        return NextResponse.json({ message: "Minimum Character 50 !" });
      }
  
      const createdIssue = await Issue.create({
        issueContent,
        createdBy: user._id,
      });

      await createdIssue.populate("createdBy");
  
      return NextResponse.json({ message: "Issue created successfully!", issue: createdIssue });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ Error: error });
    }
  }
  
  export async function GET (request)
  {



try {
  const Issues = await Issue.find({}).populate("createdBy");

  Issues.sort((issueA, issueB) => {
    const likesCountA = issueA.likes.length;
    const likesCountB = issueB.likes.length;

    return likesCountB - likesCountA;
  });
  
    
    return NextResponse.json({resdata : Issues })

} catch (error) {
    return NextResponse.json({ Error: error });   
}
  }