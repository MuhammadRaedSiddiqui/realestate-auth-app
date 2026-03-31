# Firebase Setup - Step by Step

## 🔥 Let's Set Up Firebase Together!

### Step 1: Create Firebase Project (5 minutes)

1. **Go to Firebase Console**
   - Open: https://console.firebase.google.com/
   - Sign in with your Google account

2. **Create New Project**
   - Click "Add project" or "Create a project"
   - Project name: `realestate-auth-app` (or any name you like)
   - Click "Continue"
   
3. **Google Analytics** (Optional)
   - Toggle OFF for simplicity (you can enable later)
   - Click "Create project"
   - Wait for project creation (30 seconds)
   - Click "Continue"

---

### Step 2: Enable Email Authentication (2 minutes)

1. **Navigate to Authentication**
   - In the left sidebar, click "Authentication"
   - Click "Get started" button

2. **Enable Email/Password**
   - Click on "Sign-in method" tab at the top
   - Find "Email/Password" in the list
   - Click on it
   - Toggle the first switch to "Enabled" (Email/Password)
   - Leave "Email link" disabled
   - Click "Save"

✅ Authentication is now enabled!

---

### Step 3: Create Firestore Database (3 minutes)

1. **Navigate to Firestore**
   - In the left sidebar, click "Firestore Database"
   - Click "Create database" button

2. **Choose Mode**
   - Select "Start in test mode" (for development)
   - Click "Next"

3. **Choose Location**
   - Select a location closest to you (e.g., us-central, europe-west)
   - Click "Enable"
   - Wait for database creation (1 minute)

✅ Database is ready!

---

### Step 4: Get Your Firebase Config (2 minutes)

1. **Go to Project Settings**
   - Click the gear icon ⚙️ next to "Project Overview" at the top
   - Select "Project settings"

2. **Register Web App**
   - Scroll down to "Your apps" section
   - Click the web icon `</>` (it looks like this: </> )
   - App nickname: `RealEstate Web`
   - Don't check "Firebase Hosting"
   - Click "Register app"

3. **Copy Configuration**
   - You'll see a code block with `firebaseConfig`
   - Copy ONLY the config object (the part between the curly braces)
   - It looks like this:

```javascript
{
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
}
```

4. **Click "Continue to console"**

---

### Step 5: Update Your App Config

Now paste your Firebase config into the app:

1. Open: `src/config/firebase.js`
2. Replace the placeholder values with YOUR actual config
3. Save the file

**IMPORTANT**: Replace ALL the values, not just some!

---

### Step 6: Set Security Rules (Optional but Recommended)

1. **Go to Firestore Database**
   - Click "Firestore Database" in sidebar
   - Click "Rules" tab at the top

2. **Update Rules**
   - Replace the existing rules with:

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

3. **Publish Rules**
   - Click "Publish"

This ensures users can only access their own data.

---

## ✅ Setup Complete!

Once you've completed these steps:

1. Make sure npm install has finished
2. Run: `npm start`
3. Scan QR code with Expo Go app
4. Test creating an account!

---

## 🆘 Troubleshooting

**Can't find "Authentication" in sidebar?**
- Make sure you're in the correct Firebase project
- Refresh the page

**"Configuration not found" error?**
- Double-check you copied ALL values from Firebase
- Make sure there are no typos
- Verify you saved the firebase.js file

**"Permission denied" in Firestore?**
- Update security rules as shown in Step 6
- Make sure you're logged in when testing

---

## 📸 Need Visual Help?

If you get stuck, let me know which step and I can provide more detailed guidance!
