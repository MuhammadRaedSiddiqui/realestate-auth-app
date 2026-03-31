# Testing Checklist

Use this checklist to test all features of the authentication system.

## Setup Testing

- [ ] Firebase configuration is correct in `src/config/firebase.js`
- [ ] All dependencies installed (`npm install`)
- [ ] App starts without errors (`npm start`)
- [ ] App loads on device/emulator

## Signup Flow Testing

### Valid Signup
- [ ] Navigate to Signup screen from Login
- [ ] Fill in all fields with valid data
- [ ] Submit form
- [ ] User is created in Firebase Authentication
- [ ] User data is saved in Firestore
- [ ] User is automatically logged in
- [ ] Redirected to Home screen

### Validation Testing
- [ ] Empty full name shows error
- [ ] Empty email shows error
- [ ] Invalid email format shows error
- [ ] Empty phone shows error
- [ ] Phone with less than 10 digits shows error
- [ ] Empty password shows error
- [ ] Password less than 6 characters shows error
- [ ] Mismatched passwords show error
- [ ] Multiple errors display correctly

### Error Handling
- [ ] Duplicate email shows appropriate error
- [ ] Network error shows appropriate message
- [ ] Loading state displays during signup

## Login Flow Testing

### Valid Login
- [ ] Enter registered email and password
- [ ] Submit form
- [ ] User is logged in
- [ ] Redirected to Home screen
- [ ] User info displays correctly

### Validation Testing
- [ ] Empty email shows error
- [ ] Invalid email format shows error
- [ ] Empty password shows error
- [ ] Short password shows error

### Error Handling
- [ ] Wrong password shows error
- [ ] Unregistered email shows error
- [ ] Loading state displays during login

## Forgot Password Testing

- [ ] Navigate to Forgot Password from Login
- [ ] Enter registered email
- [ ] Submit form
- [ ] Success message displays
- [ ] Password reset email received
- [ ] Click link in email
- [ ] Reset password successfully
- [ ] Can login with new password

### Validation
- [ ] Empty email shows error
- [ ] Invalid email shows error
- [ ] Unregistered email shows error

## Home Screen Testing

- [ ] User name displays correctly
- [ ] User email displays correctly
- [ ] Account info displays
- [ ] Logout button works
- [ ] Logout confirmation dialog appears
- [ ] Confirming logout returns to Login screen
- [ ] Canceling logout stays on Home screen

## Navigation Testing

- [ ] Login → Signup navigation works
- [ ] Signup → Login navigation works
- [ ] Login → Forgot Password navigation works
- [ ] Forgot Password → Login navigation works
- [ ] Back button works on all screens

## UI/UX Testing

- [ ] All screens are responsive
- [ ] Keyboard doesn't cover inputs
- [ ] Scroll works on all screens
- [ ] Touch targets are adequate size
- [ ] Loading indicators display properly
- [ ] Error messages are clear and helpful
- [ ] Success messages display correctly
- [ ] Colors and styling are consistent

## Persistence Testing

- [ ] Close and reopen app
- [ ] User stays logged in
- [ ] Logout and close app
- [ ] User stays logged out
- [ ] Login and close app
- [ ] User stays logged in on reopen

## Edge Cases

- [ ] Very long name handles correctly
- [ ] Very long email handles correctly
- [ ] Special characters in password work
- [ ] Rapid button clicking doesn't cause issues
- [ ] Switching between screens quickly works
- [ ] App works with slow internet
- [ ] App handles no internet gracefully

## Firebase Console Verification

- [ ] New users appear in Authentication
- [ ] User data appears in Firestore users collection
- [ ] User data structure is correct
- [ ] Timestamps are recorded correctly

## Security Testing

- [ ] Can't access Home screen without login
- [ ] Logout properly clears session
- [ ] Password is not visible when typing
- [ ] Firebase rules prevent unauthorized access

## Performance Testing

- [ ] App loads quickly
- [ ] Screens transition smoothly
- [ ] No lag when typing
- [ ] Images/icons load properly
- [ ] No memory leaks or crashes

## Notes

Record any issues found:

---

**Date Tested:** _______________

**Tested By:** _______________

**Device/Emulator:** _______________

**Issues Found:**
