
# Betting Tracker MVP

## Overview

This is a minimal, fast-to-build mobile app designed to help users track their betting activity, receive motivational feedback, earn points, and see their progress. The app focuses on the core functionalities of tracking, motivating, and rewarding users for reducing their betting behavior.

### Core Features:
- **Log in/Sign up**: Users can sign up and log in using Firebase Authentication (email or phone).
- **Self-report betting activity daily**: Users can input their betting amount daily.
- **Motivational feedback**: AI-driven feedback is provided based on betting activity trends.
- **Points system**: Users earn points for reducing their betting.
- **Progress tracking**: Visual representation of progress (weekly savings compared to the previous week).

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js (Express)
- **Database**: Firebase (Firestore for data storage)
- **AI/NLP**: Groq API (for motivational messages based on betting activity)
- **Hosting**: Firebase Hosting (if web app)

## Features

### 1. **User Onboarding** (30-45 min)
- Users can sign up and log in using Firebase Authentication (via email or phone).
- A welcome screen asks, “How often do you bet?” with a dropdown or slider to gather user info.
- User data is saved to Firebase Firestore.

### 2. **Daily Betting Tracker** (45-60 min)
- A simple form asks, "How much did you bet today?".
- This entry is saved in Firestore along with the timestamp.
- The app will calculate the total weekly amount and compare it to previous entries.

### 3. **AI-Generated Feedback** (60-90 min)
- The app sends the user’s betting trends to the Groq API (via simple POST requests).
  - Example prompt: 
    ```
    User bet KES 500 today. Last week they bet KES 1000. Give a short, kind motivational message.
    ```
- The Groq response will be displayed in the app as motivational feedback, either as a chatbot reply or a pop-up message.

### 4. **Points System** (30 min)
- Points are awarded based on a reduction in betting amounts.
- The current points will be displayed in the user's profile screen.
- A “Keep going!” badge or emoji will be added to encourage users if they maintain a streak.

### 5. **Basic Progress Tracker** (30 min)
- A simple weekly progress summary will be shown, e.g.:
  - “This week, you saved KES 1,500 compared to last week!”
  - Optionally, a basic bar chart can visualize the progress.

## Optional Features (If time allows)

- **Groq-powered chatbot for motivation**: A chatbot-style interface for delivering more interactive motivation (static responses can be used as a starting point).
- **Mock Rewards Page**: A list of pretend rewards that the user could unlock with their points.
- **Dark Mode**: A calming UI with dark mode for improved mental health and readability.

## How to Set Up

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/betting-tracker-mvp.git
   ```

2. **Frontend (React)**:
   - Install dependencies:
     ```
     cd betting-tracker-mvp/frontend
     npm install
     ```
   - Set up Firebase:
     - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
     - Enable Firebase Authentication (email/phone).
     - Set up Firestore to store user data and betting entries.

3. **Backend (Node.js)**:
   - Install dependencies:
     ```
     cd betting-tracker-mvp/backend
     npm install
     ```
   - Set up Firebase Admin SDK to interact with Firestore.
   - Create an API endpoint that sends user data (betting activity) to the Groq API for motivational messages.

4. **Integrate Groq API**:
   - Sign up for Groq API access and use the endpoint for sending betting data for motivational messages.
   - Make a POST request to Groq's API from the backend when a user submits their betting activity.

5. **Run the app**:
   - For the frontend (React):
     ```
     npm start
     ```
   - For the backend (Node.js):
     ```
     node app.js
     ```

6. **Firebase Hosting (optional)**:
   - For web app hosting, follow [Firebase Hosting setup](https://firebase.google.com/docs/hosting) to deploy your app.

## How to Use

1. **Sign Up / Log In**: Use email or phone to sign up or log in.
2. **Report Betting**: Enter your daily betting activity.
3. **Receive Motivation**: Get a motivational message based on your betting behavior.
4. **Earn Points**: Points are automatically awarded for reducing betting amounts.
5. **Track Progress**: View your weekly savings and progress.


## Future Improvements

- Integrate real-time updates for motivation and progress tracking.
- Add more advanced rewards and challenges.
- Improve user engagement with personalized notifications.

