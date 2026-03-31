# Real Estate Authentication App

A professional React Native authentication system with Firebase backend, designed for a real estate listing application.

## Features

- ✅ User Login
- ✅ User Signup with profile creation
- ✅ Forgot Password / Password Reset
- ✅ Form validation
- ✅ Clean, light, and professional UI
- ✅ Responsive design
- ✅ Firebase Authentication
- ✅ Firestore database integration

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing)
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable "Email/Password"
4. Create Firestore Database:
   - Go to Firestore Database
   - Create database in test mode
5. Get your Firebase config:
   - Go to Project Settings > Your apps
   - Add a web app
   - Copy the firebaseConfig object

### 3. Configure Firebase

Open `src/config/firebase.js` and replace the placeholder values with your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

### 4. Run the App

```bash
# Start Expo
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

## Project Structure

```
├── App.js                      # Main app component with navigation
├── src/
│   ├── config/
│   │   └── firebase.js        # Firebase configuration
│   ├── components/
│   │   ├── Input.js           # Reusable input component
│   │   └── Button.js          # Reusable button component
│   └── screens/
│       ├── LoginScreen.js     # Login screen
│       ├── SignupScreen.js    # Signup screen
│       ├── ForgotPasswordScreen.js  # Password reset screen
│       └── HomeScreen.js      # Home screen (after login)
```

## UI Design

- **Color Scheme**: Light and professional with blue accents (#2B6CB0)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Reusable, consistent design system
- **Responsive**: Works on all screen sizes
- **Accessibility**: Proper labels and error messages

## Firebase Free Tier Limits

Perfect for university projects:
- Authentication: Unlimited users
- Firestore: 1GB storage, 50K reads/day, 20K writes/day
- Hosting: 10GB storage, 360MB/day transfer

## Next Steps

After authentication is working, you can:
1. Add user profile editing
2. Integrate real estate listing features
3. Add property search and filters
4. Implement favorites/saved properties
5. Add property details and images

## Troubleshooting

- **Firebase errors**: Make sure you've enabled Email/Password authentication in Firebase Console
- **Build errors**: Try `npm install` again or clear cache with `expo start -c`
- **Navigation issues**: Ensure all dependencies are installed correctly

## License

MIT
