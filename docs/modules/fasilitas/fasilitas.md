---
name: Fasilitas Module Documentation
relation: RULES.md → modules/fasilitas/
description: Documentation for the fasilitas module (stub/placeholder page)
type: editable
---

# Fasilitas Module

## Overview

The `fasilitas` module is the facilities page at `/fasilitas`. Displays school facilities with category filtering and statistics.

## Structure

```
src/modules/fasilitas/
├── fasilitas.tsx          — Page component (header + stats + filterable card grid)
├── fasilitas.json         — Facility items (name, description, category, icon, color)
└── css/fasilitas.css      — Page styles
```

## Features

- **Hero header** — dark section with title/subtitle and wave divider
- **Stats section** — 5 stat cards (facilities count, labs, classrooms, students, accreditation)
- **Category filter** — tabs to toggle between "Semua", "Laboratorium", "Fasilitas Umum"
- **Facility cards** — icon, category badge, name, and description per item

## Data

Facility data lives in `fasilitas.json`. Each entry has:
- `id`, `name`, `description`, `category` (for filtering), `icon` (Lucide icon name), `color` (accent hex)
