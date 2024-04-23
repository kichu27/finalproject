

import { NextResponse } from "next/server";
import {Course} from "@/models/CourseModel";

export async function GET(req) {
  try {

    const url = await req.url;
    const urlParams = new URLSearchParams(url.split("?")[1]);
    const categories = JSON.parse(urlParams.get("name"));
   const data = await Course.find({category :categories} ,{ courseName :1} )


    return NextResponse.json({
    data : data
    });

  } catch (error) {
    
    return NextResponse.json({
      status: 500,
      
    });
  }
}


export async function PUT(req) {
  try {

  const data = await req.json()
  
const { cname , category ,instructor , startDate, endDate,  price,  description, subDescription } = data;


const updateFields = {};
if (price) updateFields.price = price;
if (subDescription) updateFields.subDescription = subDescription;
if (description) updateFields.description = description;
if (startDate) updateFields.startDate = startDate;
if (endDate) updateFields.endDate = endDate;
if (instructor) updateFields.instructor = instructor;

await Course.findOneAndUpdate({ category : data.category, courseName:data.cname } , updateFields)


    return NextResponse.json({
message : "Successfully Updated Course !"
    });

  } catch (error) {
    
    return NextResponse.json({
      status: 500,
      
    });
  }
}


