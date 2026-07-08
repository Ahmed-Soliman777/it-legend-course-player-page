## Tech Stack

- Framework: Next.js with TypeScript
- UI Language: React 
- Styling: CSS Modules and Global CSS

## Project Structure

```
app/
  - globals.css          Global styles
  - layout.tsx           Root layout component
  - page.tsx             Home page component
  - page.module.css      Page-specific styles

components/
  - ask_question/        Submit questions feature
  - comments/            Discussion comments feature
  - course_materials/    Course resources and downloads
  - course_topics/       Curriculum navigation
  - curriculum_icon/     Visual curriculum identifier
  - exam/                Assessment and quiz interface
  - exam_card/           Individual exam display card
  - header/              Navigation header
  - leaderboard/         Student rankings display
  - topic_card/          Individual course topic card
  - video_player/        Video lecture player

public/                  Static assets and images

Root Files:
  - data.ts              Data models and constants
  - types.ts             TypeScript type definitions
  - tsconfig.json        TypeScript configuration
  - next.config.ts       Next.js configuration
  - eslint.config.mjs    ESLint rules and settings
```