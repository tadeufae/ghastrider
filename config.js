/**
 * MASTER CONFIGURATION
 * * IMPORTANT: Add this file to your .gitignore so it is not pushed to GitHub.
 * This keeps your personal Firebase URL private while allowing the code to be public.
 */
window.GAME_CONFIG = {
    // Replace with your actual Firebase Realtime Database URL
    firebaseURL: "https://ghastrider-default-rtdb.europe-west1.firebasedatabase.app/leaderboard",
    
    // Default players used if the database is empty or unreachable
    defaultPlayers: ["Theo", "Tadeu", "Luise", "Max"]
};
