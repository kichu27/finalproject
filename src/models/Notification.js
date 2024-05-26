  import { mongoose } from "mongoose";


  const notificationSchema = new mongoose.Schema({
   
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['info', 'warning'], 
      default: 'info'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    read: {
      type: Boolean,
      
      default: false 
    },
    expiresAt: {
      type: Date,
      default: function() {
        return new Date(+this.createdAt + 5 * 60000); 
      }
    }
  });

  export const Notification = mongoose.models.Notification || mongoose.model('Notification', notificationSchema)  ;

    