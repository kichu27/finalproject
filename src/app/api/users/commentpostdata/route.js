
import { NextResponse } from "next/server";
import Connect from "@/lib/dbconn";
import { Issue } from "@/models/ComIsu";

export async function POST(request) {
    try {
      await Connect();
  
      const {id} = await request.json();
      
      const issue = await  Issue.findById(id).populate("comments.user")
    

      const commentdata = await issue.comments

      return NextResponse.json({ resdata : commentdata});

    } catch (error) {
      console.error(error);
      return NextResponse.json({ "Error": error });
    }
  }