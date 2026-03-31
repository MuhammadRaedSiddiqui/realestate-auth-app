# Quick Start Guide

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (will be installed with dependencies)
- A smartphone with Expo Go app (for testing on device)

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React Native
- Expo
- Firebase
- React Navigation

### 2. Configure Firebase

Follow the detailed instructions in `FIREBASE_SETUP.md` to:
- Create a Firebase project
- Enable Email/Password authentication
- Create a Firestore database
- Get your Firebase configuration
- Update `src/config/firebase.js` with your config

### 3. Start the Development Server

```bash
npm start
```

This will open Expo DevTools in your browser.

### 4. Run on Your Device

**Option A: Physical Device**
1. Install "Expo Go" app from App Store (iOS) or Play Store (Android)
2. Scan the QR code shown in the terminal or browser
3. The app will load on your device

**Option B: Emulator/Simulator**
- For Android: Press `a` in the terminal (requires Android Studio)
- For iOS: Press `i` in the terminal (requires Xcode, Mac only)
- For Web: Press `w` in the terminal

## Testing the App

### Test Login Flow
1. Start on the Login screen
2. Click "Sign Up" to create a new account
3. Fill in all fields:
   - Full Name: John Doe
   - Email: test@example.com
   - Phone: 1234567890
   - Password: test123
   - Confirm Password: test123
4. Click "Sign Up"
5. You should see the Home screen

### Test Forgot Password
1. On Login screen, click "Forgot Password?"
2. Enter your email
3. Click "Send Reset Link"
4. Check your email for the reset link
5. Follow the link to reset your password

### Verify in Firebase Console
1. Go to Firebase Console > Authentication
2. You should see your test user listed
3. Go to Firestore Database > users collection
4. You should see a document with your user data

## Project Structure

```
├── App.js                          # Main app entry point
├── package.json                    # Dependencies
├── app.json                        # Expo configuration
├── babel.config.js                 # Babel configuration
├── src/
│   ├── config/
│   │   └── firebase.js            # Firebase setup
│   ├── components/
│   │   ├── Input.js               # Text input component
│   │   └── Button.js              # Button component
│   └── screens/
│       ├── LoginScreen.js         # Login page
│       ├── SignupScreen.js        # Registration page
│       ├── ForgotPasswordScreen.js # Password reset
│       └── HomeScreen.js          # Home page after login
```

## Common Commands

```bash
# Start development server
npm start

# Start with cache cleared
npm start -- --clear

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on web
npm run web
```

## Features Included

✅ User Registration with validation
✅ Email/Password Login
✅ Password Reset via Email
✅ Form validation with error messages
✅ User profile stored in Firestore
✅ Automatic authentication state management
✅ Professional, responsive UI
✅ Loading states and error handling

## Next Steps

After getting authentication working, you can:

1. **Add User Profile Screen**
   - View and edit user information
   - Upload profile picture
   - Update phone number

2. **Integrate Real Estate Features**
   - Property listing screen
   - Property details screen
   - Search and filter properties
   - Favorite/saved properties

3. **Add More Authentication Features**
   - Email verification
   - Social login (Google, Facebook)
   - Phone number authentication

4. **Improve UI/UX**
   - Add animations
   - Implement dark mode
   - Add splash screen
   - Custom app icon

## Troubleshooting

### "Cannot find module" errors
```bash
npm install
```

### Expo won't start
```bash
npm start -- --clear
```

### Firebase errors
- Check `FIREBASE_SETUP.md` for detailed Firebase configuration
- Verify your firebase.js has the correct config values

### App crashes on startup
- Make sure all dependencies are installed
- Check that firebase.js is properly configured
- Look at the error message in the terminal

## Need Help?

- Check `README.md` for overview
- Check `FIREBASE_SETUP.md` for Firebase configuration
- Review error messages in the terminal
- Check Firebase Console for authentication/database issues

## Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [Firebase Docs](https://firebase.google.com/docs)
- [React Navigation Docs](https://reactnavigation.org/)
