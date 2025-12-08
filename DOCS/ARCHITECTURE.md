# Architecture

## Overview
JaysJoints is a single-page application (SPA) built with React. It aims to replicate the customizable, social feel of early 2000s social media (MySpace) while utilizing modern web performance standards.

## Tech Stack
- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS + CSS Modules approach (globally scoped variables in `index.css`).
- **Icons**: Lucide React

## Directory Structure
```
src/
├── components/       # Reusable UI blocks
│   ├── Feed.jsx      # Main content stream
│   ├── Layout.jsx    # App shell & Navigation
│   ├── MusicPlayer.jsx # Persistent audio player
│   └── ProfileCard.jsx # User sidebar info
├── App.jsx           # Main entry component
├── index.css         # Global styles & Theme Variables
└── main.jsx          # React DOM entry
```

## Design Patterns
- **Glassmorphism**: Extensive use of `backdrop-filter: blur()` and semi-transparent RGBA colors.
- **CSS Variables**: All theme colors (`--accent-color`, `--bg-primary`) are defined in `:root` to allow for potential future "Theme Switcher" features.
- **Responsiveness**: CSS Grid changes from 2-column to 1-column on screens smaller than 800px.
