import Connect from "@/lib/dbconn";
import { Issue } from "@/models/ComIsu";
import {NextResponse} from "next/server"



export async function POST(request){
    try {
         await Connect()

const {id} = await request.json()


const resdata = await Issue.findOne({_id : id}).populate("createdBy")
if (!resdata) {
    return NextResponse.json({msg :"No Issue found !" })
    
}

return NextResponse.json({data :resdata })

    } catch (error) {
        return NextResponse.json({msg :error })
    }


  }