---
name: Fasilitas Module Documentation
relation: RULES.md → modules/fasilitas/
description: Documentation for the fasilitas module (stub/placeholder page)
type: editable
---

# Fasilitas Module

## Overview

The `fasilitas` module is the facilities page at `/fasilitas`. Displays school facilities as a photo card carousel (6 per page) with inline header stats.

## Structure

```
src/modules/fasilitas/
├── fasilitas.tsx          — Page component (header + stats + photo card grid)
├── fasilitas.json         — Facility items (name, description, photo)
└── css/fasilitas.css      — Page styles
```

## Features

- **Hero header** — dark section with title/subtitle, wave divider, and 3 inline stats (facilities count, labs, classrooms)
- **Facility cards** — photo, name, and description per item
- **Carousel pagination** — when there are more than 6 facilities, cards are split into pages of 6 that slide, navigated with prev/next arrows and dot indicators (`PER_PAGE` in `fasilitas.tsx`)

## Data

Facility data lives in `fasilitas.json`. Each entry has:
- `id`, `name`, `description`, `photo` (path under `/images/fasilitas/`, photos dropped into `public/images/fasilitas/`)
