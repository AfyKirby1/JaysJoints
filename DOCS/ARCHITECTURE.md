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
│   ├── Feed.jsx      # Classic layout: Main content stream
│   ├── Layout.jsx    # App shell & Navigation (with design mode toggle)
│   ├── MusicPlayer.jsx # Persistent audio player
│   ├── ProfileCard.jsx # Classic layout: User sidebar info
│   ├── Hero.jsx      # Modern layout: Hero section
│   ├── AlbumGrid.jsx # Modern layout: Album/EP grid display
│   ├── TrackList.jsx # Modern layout: Interactive track listing
│   └── ModernFeed.jsx # Modern layout: Card-based updates feed
├── App.jsx           # Main entry component (design mode router)
├── index.css         # Global styles & Theme Variables
└── main.jsx          # React DOM entry
```

## Design Patterns
- **Glassmorphism**: Extensive use of `backdrop-filter: blur()` and semi-transparent RGBA colors.
- **CSS Variables**: All theme colors (`--accent-color`, `--bg-primary`) are defined in `:root` to allow for potential future "Theme Switcher" features.
- **Responsiveness**: CSS Grid changes from 2-column to 1-column on screens smaller than 800px.
- **Dual Design Modes**: 
  - **Classic Mode**: Myspace-inspired sidebar + feed layout with glassmorphism
  - **Modern Mode**: Contemporary hero-first layout with visual grids and card-based content
- **Design Mode Toggle**: Users can switch between Classic and Modern layouts via navigation button
