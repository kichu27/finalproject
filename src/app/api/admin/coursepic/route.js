
import { Course } from "@/models/CourseModel";
import Connect from "@/lib/dbconn";
import { NextResponse } from 'next/server';
export async function POST(request)
{

    try {
       
    
const { publicId } = await request.json();

await Connect()
const user = await User.findById({_id:id})
user.profilepic_id = publicId
await user.save() ; 

        return NextResponse.json({ msg : "sdad" });
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'unsuccessful' });
      }






}