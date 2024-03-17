
export const dynamic = 'force-dynamic'

import { User } from "@/models/usermodel";
import Connect from "@/lib/dbconn";
import getdatafromtoken from "@/app/helpers/getdatafromtoken";
import { NextResponse } from 'next/server';
export async function POST(request)
{

    try {
       
    
const { publicId } = await request.json();

const id = await getdatafromtoken()

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