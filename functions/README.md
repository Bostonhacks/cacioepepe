# Cacioepepe Cloud Functions

Develop related functions by creating a folder for them, and save them as separate files and the suffix .function.js.

All Firestore read/write operations must be performed via Cloud Functions, all writes to Firestore are disallowed except by Firebase Admin.

Function Codes:
- started = 0
- submitted = 1
- rejected = 2
- waitlisted = 3
- accepted = 4
- confirmed = 5
- declined = 6
- checked in = 7
