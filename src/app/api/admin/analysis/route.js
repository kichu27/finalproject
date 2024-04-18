import { NextResponse } from "next/server";
import { Course } from "@/models/CourseModel";
import Connect from "@/lib/dbconn";


export async function GET(request)

{


    try {
      
        
  
        const data2 = await Course.aggregate([
          {
            $unwind: "$Boughtcourses",
          },
          {
            $lookup: {
              from: "courses",
              localField: "Boughtcourses",
              foreignField: "_id",
              as: "courseInfo",
            },
          },
          {
            $unwind: "$courseInfo",
          },
          {
            $project: {
              category: "$courseInfo.category",
              price: "$courseInfo.price",
            },
          },
          {
            $group: {
              _id: "$category",
              CourseCount: {
                $count: {},
              },
              RevenueGenerated: {
                $sum: {
                  $multiply: ["$price", 1],
                },
              },
            },
          },
        ] );

        console.log(data2);
        
      const data = await Course.aggregate([
            {
              $group: {
                _id: "$category",
                catcount: {
                  $count: {},
                },
                maxcourseprice: {
                  $max: "$price",
                },
                mincourseprice: {
                  $min: "$price",
                },
                totalcoursesum: {
                  $sum: "$price",
                },
                courses: {
                  $push: "$courseName",
                }, // Collect all course names
              },
            },
            {
              $sort: {
                maxcourseprice: 1, // Sort by maxcourseprice within each category
              },
            },
            {
              $project: {
                _id: 1,
                catcount: 1,
                maxcourseprice: 1,
                maxcoursename: {
                  $arrayElemAt: ["$courses", -1],
                },
                mincourseprice: 1,
                mincoursename: {
                  $arrayElemAt: ["$courses", 0],
                },
                totalcoursesum: 1,
              }
            }
          ])

          



        return NextResponse.json({data:data})
        
    } catch (error) {
        console.log(error);
    }




}