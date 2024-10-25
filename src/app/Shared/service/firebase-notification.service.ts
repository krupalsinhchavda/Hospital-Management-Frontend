import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private messaging;

  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    this.messaging = getMessaging(app);
  }

  requestPermission(): Promise<string> {
    console.log("this.requestPermission")
    return Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log(getToken(this.messaging, { vapidKey: environment.firebaseConfig.vapidKey }))
        return getToken(this.messaging, { vapidKey: environment.firebaseConfig.vapidKey });
      } else {
        throw new Error('Permission not granted');
      }
    });
  }

  receiveMessage() {
    onMessage(this.messaging, (payload) => {
        console.log(payload)
        const notification = payload.notification;

        // Check if notification exists
        if (notification) {
            // Destructure with default values
            const title = notification.title || 'Default Title'; // Fallback title
            const body = notification.body || 'Default Body'; // Fallback body
            const icon = notification.icon || '/firebase-logo.png'; // Fallback icon

            // Show a browser notification
            const notificationOptions = {
                body: body,
                icon: icon,
            };

            const browserNotification = new Notification(title, notificationOptions);
            
            // Handle click event on the notification
            browserNotification.onclick = () => {
                if (payload.fcmOptions && payload.fcmOptions.link) {
                    window.open(payload.fcmOptions.link, '_blank');
                }
            };
        } else {
            console.warn('No notification payload found in the message.');
        }
    });
  }
}
