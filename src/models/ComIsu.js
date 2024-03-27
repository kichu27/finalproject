import mongoose from "mongoose";
import { User } from "./usermodel";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User, 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User, 
    required: true
  }
});
  
const saveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User, // Reference to the User schema
    required: true
  }
});
const issueSchema = new mongoose.Schema({
  issueContent: {
    type: String,
    required: true
  },
  issueCreated: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true 
  },
  likes: [likeSchema],
  comments: [commentSchema], 
  saves: [saveSchema] 
});

export const Issue = mongoose.models.Issue || mongoose.model("Issue", issueSchema);
