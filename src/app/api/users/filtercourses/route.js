export const dynamic = 'force-dynamic'

import Connect from "@/lib/dbconn";
import { Course } from "@/models/CourseModel";
import { NextResponse } from "next/server";

await Connect();

export async function GET(request) {
  try {
    const url = await request.url;
    const urlParams = new URLSearchParams(url.split("?")[1]);
    
    
    const categories = JSON.parse(urlParams.get("categories"));
    const teachers = JSON.parse(urlParams.get("teachers"));
    const priceRange = parseInt(urlParams.get("priceRange"));
    
 
    const filter = {};
    if (categories && categories.length > 0) {
      filter.category = { $in: categories };
    }
    if (teachers && teachers.length > 0) {
      filter.instructor = { $in: teachers };
    }
    if (!isNaN(priceRange)) {
      filter.price = { $lte: priceRange };
    }

   
    const data = await Course.find(filter);
  

    return NextResponse.json({ resdata : data });
  } catch (error) {
    return NextResponse.json({ msgfromfiltercourse: "NOPE", error });
  }
}

