export const dynamic = 'force-dynamic'

import { NextResponse } from "next/server";
import Connect from "@/lib/dbconn";
import { User } from "@/models/usermodel";
import getdatafromtoken from "@/app/helpers/getdatafromtoken";
import { Issue } from "@/models/ComIsu";


export async function POST(request) {
    try {
      await Connect();
  
      const { data  , id} = await request.json();
 
      const userData = await getdatafromtoken();
  

      const issue = await  Issue.findById(id)
  
      
      
      await  issue.comments.push({content : data , user : userData}) 
await issue.save()

      return NextResponse.json({ message: "COMMENT POSTED SUCCESSFULLY !"});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ Error: error });
    }
  }

  