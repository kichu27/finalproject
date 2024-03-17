import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  imgurl : {

    type : String , 
  } , 
 
   
  
 
},
{timestamps : true} );

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
