# React Native Real Estate Authentication System

[![React Native](https://img.shields.io/badge/React%20Native-0.73-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~50.0-000020.svg)](https://expo.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-10.7-orange.svg)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A complete, production-ready authentication system with a clean, professional UI designed for a real estate listing application. Built with React Native, Expo, and Firebase.

## 🎯 Features

- ✅ **User Authentication**
  - Email/Password Login
  - User Registration with profile
  - Forgot Password / Password Reset
  - Automatic session management
  - Secure logout

- ✅ **User Profiles**
  - Full name, email, phone number
  - Stored in Firestore database
  - Account creation timestamp
  - Display name in Firebase Auth

- ✅ **Professional UI/UX**
  - Clean, light, responsive design
  - Form validation with error messages
  - Loading states
  - Keyboard-aware scrolling
  - Consistent design system

- ✅ **Error Handling**
  - Network errors
  - Invalid credentials
  - Duplicate accounts
  - User-friendly error messages

## 📱 Screenshots

### Login Screen
Clean and professional login interface with email/password authentication.

### Signup Screen
Complete registration form with validation for name, email, phone, and password.

### Forgot Password
Simple password reset flow with email verification.

### Home Screen
Welcome screen displaying user information after successful login.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- A smartphone with Expo Go app (for testing)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/MuhammadRaedSiddiqui/realestate-auth-app.git
cd realestate-auth-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Firebase**
   - Follow the detailed guide in `FIREBASE_SETUP.md`
   - Create a Firebase project
   - Enable Email/Password authentication
   - Create a Firestore database
   - Update `src/config/firebase.js` with your Firebase config

4. **Start the development server**
```bash
npm start
```

5. **Run on your device**
   - Install "Expo Go" app from App Store or Play Store
   - Scan the QR code shown in the terminal
   - The app will load on your device

## 📖 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Step-by-step setup guide
- **[FIREBASE_SETUP.md](FIREBASE_SETUP.md)** - Firebase configuration
- **[FIREBASE_SETUP_WALKTHROUGH.md](FIREBASE_SETUP_WALKTHROUGH.md)** - Detailed Firebase setup
- **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - Complete project summary
- **[TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)** - Testing guide

## 📁 Project Structure

```
├── App.js                          # Main app with navigation
├── src/
│   ├── config/
│   │   ├── firebase.js            # Firebase configuration
│   │   └── theme.js               # Design system
│   ├── components/
│   │   ├── Input.js               # Reusable text input
│   │   └── Button.js              # Reusable button
│   ├── screens/
│   │   ├── LoginScreen.js         # Login page
│   │   ├── SignupScreen.js        # Registration page
│   │   ├── ForgotPasswordScreen.js # Password reset
│   │   └── HomeScreen.js          # Home page
│   └── utils/
│       └── validation.js          # Form validation helpers
```

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation
- **Backend**: Firebase (Authentication + Firestore)
- **Language**: JavaScript
- **UI**: Custom components with consistent design system

## 🎨 Design System

- **Primary Color**: #2B6CB0 (Professional blue)
- **Background**: #FFFFFF (Clean white)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Reusable, consistent design
- **Responsive**: Works on all screen sizes

## 🔥 Firebase Setup

This project uses Firebase's free tier, which includes:
- **Authentication**: Unlimited users
- **Firestore**: 1GB storage, 50K reads/day, 20K writes/day
- **Cost**: $0 (perfect for university projects)

See `FIREBASE_SETUP.md` for detailed configuration instructions.

## 🧪 Testing

Use the comprehensive testing checklist in `TESTING_CHECKLIST.md` to verify:
- All authentication flows
- Form validation
- Error handling
- Navigation
- UI responsiveness
- Session persistence

## 🔜 Next Steps

After authentication is working, you can add:

1. **Property Listings**
   - List view of properties
   - Property details screen
   - Image galleries

2. **Search & Filter**
   - Search by location, price, type
   - Filter options
   - Sort functionality

3. **User Features**
   - Favorite properties
   - Saved searches
   - Contact agents

4. **Profile Management**
   - Edit profile
   - Upload profile picture
   - View saved properties

## 📝 License

MIT License - Free to use for university projects and personal use.

## 👨‍💻 Author

**Muhammad Raed Siddiqui**
- GitHub: [@MuhammadRaedSiddiqui](https://github.com/MuhammadRaedSiddiqui)

## 🙏 Acknowledgments

- Built with React Native and Expo
- Firebase for backend services
- Created for university project

## 📧 Support

For questions or issues:
1. Check the documentation files
2. Review error messages in terminal
3. Verify Firebase configuration
4. Open an issue on GitHub

---

**Created**: March 2026  
**Purpose**: University Real Estate App Project  
**Status**: Ready for Development ✅
