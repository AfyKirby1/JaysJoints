# Changelog

## [1.0.0] - 2025-12-07
### Added
- **Core Architecture**: Vite + React setup.
- **Design System**: Glassmorphism CSS variables, responsive grid layout.
- **Components**:
  - `Layout.jsx`: Main application wrapper with persistent navigation.
  - `ProfileCard.jsx`: "Myspace-style" sidebar with bio and Top Connections.
  - `Feed.jsx`: Main scrollable content area for posts and music drops.
  - `MusicPlayer.jsx`: Persistent bottom-docked player widget.
- **Assets**: Basic placeholder images from Unsplash.

## [1.1.0] - 2025-12-09
### Added
- **New Themes**: Added "Neon Nights" (Cyberpunk), "Oceanic Glass", "Sunset" (Retro Vaporwave), and "Forest" (Organic) themes.
- **Theme Control**: Cycle through Dark -> Light -> Neon -> Ocean -> Sunset -> Forest.
- **Layout Variations**: Added Layout Toggle button supporting 3 modes:
  - **Standard**: Sidebar Left.
  - **Modern**: Sidebar Right.
  - **Standard**: Sidebar Left.
  - **Modern**: Sidebar Right.
  - **Focus**: Centered Feed (Sidebar hidden).
- **Tools**: Added `launch.bat` for one-click startup.

## [1.2.0] - 2025-12-09
### Added
- **Dual Design Modes**: Complete redesign toggle between "Classic" (Myspace-style) and "Modern" (Contemporary) layouts.
- **Modern Layout Components**:
  - **Hero Section**: Large visual hero with artist info, stats, and call-to-action buttons.
  - **Album Grid**: Visual grid display of albums/EPs with hover effects and play buttons.
  - **Track List**: Interactive track listing with play states, plays count, and actions.
  - **Modern Feed**: Card-based update feed with images and event badges.
- **Design Mode Toggle**: Button in navigation to switch between Classic and Modern designs.
- **Persistent Preference**: Design mode choice saved to localStorage.