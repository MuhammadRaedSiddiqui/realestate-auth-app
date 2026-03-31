# Firebase Setup Guide

Follow these steps to configure Firebase for your Real Estate Authentication App:

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name (e.g., "realestate-auth-app")
4. Disable Google Analytics (optional for university project)
5. Click "Create project"

## Step 2: Enable Authentication

1. In Firebase Console, click "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Click on "Email/Password"
5. Toggle "Enable" to ON
6. Click "Save"

## Step 3: Create Firestore Database

1. Click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Select "Start in test mode" (for development)
4. Choose a location closest to you
5. Click "Enable"

## Step 4: Get Firebase Configuration

1. Click the gear icon ⚙️ next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps"
4. Click the web icon `</>`
5. Register your app with a nickname (e.g., "RealEstate Web")
6. Copy the `firebaseConfig` object

## Step 5: Add Config to Your App

1. Open `src/config/firebase.js`
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",                    // Your actual API key
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Step 6: Set Firestore Security Rules (Optional but Recommended)

In Firestore Database > Rules, replace with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

This ensures users can only read/write their own data.

## Step 7: Test Your Setup

1. Run `npm install`
2. Run `npm start`
3. Try creating a new account
4. Check Firebase Console > Authentication to see the new user
5. Check Firestore Database > users collection to see user data

## Troubleshooting

### "Firebase: Error (auth/configuration-not-found)"
- Make sure you've replaced ALL placeholder values in firebase.js
- Check that Email/Password authentication is enabled

### "Firebase: Error (auth/network-request-failed)"
- Check your internet connection
- Verify your Firebase config is correct

### "Permission denied" in Firestore
- Update your Firestore security rules as shown in Step 6
- Make sure you're logged in when trying to write data

## Free Tier Limits

Your Firebase free tier includes:
- **Authentication**: Unlimited users
- **Firestore**: 
  - 1 GB storage
  - 50,000 document reads/day
  - 20,000 document writes/day
  - 20,000 document deletes/day

This is more than enough for a university project!
