import { NextResponse } from "next/server";
import Connect from "@/lib/dbconn";
import { Notification } from "@/models/Notification";

export async function GET(request) {
    try {
        await Connect();
        
        // Find all notifications and select only the message, createdAt, and expiresAt fields
        const notifications = await Notification.find({}).select('message createdAt expiresAt');
        
        // Get the current date and time
        const currentDate = new Date();

        // Filter out expired notifications
        const nonExpiredNotifications = notifications.filter(notification => currentDate <= notification.expiresAt);

        // Delete the expired notifications from the database
        const expiredNotificationIds = notifications.filter(notification => currentDate > notification.expiresAt).map(notification => notification._id);
        await Notification.deleteMany({ _id: { $in: expiredNotificationIds } });

        // Return the number of non-expired notifications and the non-expired notifications
        return NextResponse.json({ number: nonExpiredNotifications.length, notis: nonExpiredNotifications });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500 });
    }
}
