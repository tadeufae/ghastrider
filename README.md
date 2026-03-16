# GhastRider

A fast, arcade-style survival flyer built with vanilla JavaScript and HTML5 Canvas. You pilot a hero riding a ghast through a Nether fortress, dodge walls, skim lava, chase high-value pickups, and compete on a Firebase-backed leaderboard.

![GhastRider Gameplay](ghastrider-gameplay-ss.png)

## What It Is

GhastRider is a single-page browser game with:

- real-time arcade movement tuned for desktop and mobile
- pixel-art pickups and character variants
- weighted leaderboard scoring stored in Firebase
- procedural obstacle and collectible spawning
- lightweight deployment to Firebase Hosting

## Current Gameplay

Your run is built around risk, score routing, and survival:

- `Walls` are the base survival metric. Every fortress wall you clear adds `1` score weight.
- `Scraps` are common collectibles worth `3` score weight each.
- `Emeralds` are the premium reward, earned by finding villagers and completing the trade animation. Each emerald is worth `10` score weight.
- `Gold Nuggets` grant temporary wall immunity for `5` seconds.
- `Fire Resistance Potions` grant lava immunity and wall immunity for `7` seconds.
- If a potion is active and you collect a nugget, the potion timer is lifted up to `5` seconds if it had dropped below that.

Villagers spawn occasionally after enough wall clears, appear in less predictable positions, and pause the game briefly for an emerald reward sequence before the run continues.

## Scoring

The leaderboard score is calculated dynamically from stored stats:

```text
score = emeralds * 10 + scraps * 3 + walls * 1
```

The database stores:

- `emeralds`
- `scraps`
- `walls`

The total score is derived in the game each time the leaderboard is rendered.

## Visual Style

The current build includes:

- pixel-art rider and ghast sprites
- powered-up gold and fire transformation states
- animated pickup indicators in the top-right HUD
- gold firework bursts and potion glass/spark bursts on pickup
- ash particles, smoke trail effects, lava floor, and layered fortress atmosphere

## Tech Notes

The project is intentionally minimal:

- `index.html`: game UI, styles, rendering, logic, and Firebase interaction
- `config.js`: local runtime config for the Realtime Database URL and default players
- `firebase.json`: Hosting config

There is no bundler and no framework. The game runs directly in the browser from static files.

## Running Locally

You only need a browser.

For a quick local run, open `index.html` directly or serve the folder with any static server.

If you want a simple local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Firebase Setup

The leaderboard uses Firebase Realtime Database, and the site can be deployed with Firebase Hosting.

### Realtime Database

Point `config.js` at your leaderboard path:

```javascript
window.GAME_CONFIG = {
    firebaseURL: "https://your-project-id-default-rtdb.region.firebasedatabase.app/leaderboard",
    defaultPlayers: ["Theo", "Tadeu", "Luise", "Max"]
};
```

Suggested starter data:

```json
{
  "leaderboard": {
    "Theo": { "emeralds": 0, "scraps": 0, "walls": 0 },
    "Tadeu": { "emeralds": 0, "scraps": 0, "walls": 0 },
    "Luise": { "emeralds": 0, "scraps": 0, "walls": 0 },
    "Max": { "emeralds": 0, "scraps": 0, "walls": 0 }
  }
}
```

Basic open rules for testing:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### Hosting

This repo is already structured as a static Firebase Hosting app. The current `firebase.json` serves the project root directly.

Deploy with:

```bash
firebase deploy --only hosting
```

## Controls

- `Desktop`: hold `Space` or `Arrow Up` to thrust
- `Mobile`: tap and hold to thrust
- `After death`: press `Space` or `Arrow Up` to restart

## Why The Repo Is Simple

This project favors immediacy over tooling:

- easy to inspect
- easy to tweak in one file
- easy to deploy
- easy to hand off

That makes it a good fit for rapid mechanic iteration, visual experimentation, and small gameplay updates without a build pipeline.

## Credits

Created by Tadeu with significant AI-assisted iteration on gameplay, visuals, and deployment flow.

## License

Open source. Fork it, reskin it, or turn the Nether into something stranger.
