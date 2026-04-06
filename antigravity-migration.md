# Antigravity Migration Plan: Disconnecting Lovable & Local Setup

## Codebase Overview

This project is a modern frontend web application built initially using Lovable.dev. It relies on standard modern web development tools and libraries:

- **Framework**: React 18
- **Build Tool**: Vite (with SWC for fast compilation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: `shadcn/ui` (Radix UI components heavily featured in `package.json`)
- **Routing**: React Router DOM (`src/App.tsx`)
- **Data Fetching/State**: React Query (`@tanstack/react-query`)
- **Icons**: Lucide React
- **Testing Forms/Validation**: React Hook Form with Zod
- **Testing**: Pre-configured with Vitest (unit tests) and Playwright (e2e tests)

The project structure is standard for a Vite React app, where `src/main.tsx` is the entry point, `src/App.tsx` handles the routing and main providers, and `index.html` serves as the initial HTML template.

---

## Step-by-Step Plan: Disconnecting Lovable Dependencies

Lovable injects tooling to support its online editor platform. To run this project independently and clean up these dependencies, follow these steps:

### 1. Update `package.json`
Remove the Lovable specific package from your development dependencies.
- Open `package.json`
- Under `"devDependencies"`, remove the line for `"lovable-tagger"`:
  ```json
  "lovable-tagger": "^1.1.13"
  ```

### 2. Update `vite.config.ts`
Remove the Lovable Vite plugin which injects component tags for their visual editor.
- Open `vite.config.ts`
- Remove the import:
  ```typescript
  import { componentTagger } from "lovable-tagger";
  ```
- Remove it from the `plugins` array. Change:
  ```typescript
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  ```
  to simply:
  ```typescript
  plugins: [react()],
  ```

### 3. Clean up `index.html` Metadata
Lovable adds some default meta tags for SEO and Open Graph. You will want to customize or remove these.
- Open `index.html`
- Update or remove the author tag:
  ```html
  <meta name="author" content="Lovable" /> <!-- Change to your name/company -->
  ```
- Overhaul the Open Graph and Twitter tags:
  ```html
  <!-- You can change these contents to reflect "Legal Compass" -->
  <meta property="og:title" content="Lovable App" />
  <meta property="og:description" content="Lovable Generated Project" />
  <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  
  <meta name="twitter:site" content="@Lovable" />
  <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  ```

---

## Local Development Setup instructions

The project comes with a `bun.lockb` file, suggesting it was built using [Bun](https://bun.sh/). However, you can use `npm` or `yarn` as well since standard `package.json` scripts are provided.

### Prerequisites
Make sure you have Node.js (version 18+ recommended) installed. If you want to use Bun, install [Bun](https://bun.sh/).

### Installation
1. Open your terminal and navigate to the project root directory (`legal-compass-1`).
2. Install the necessary dependencies by running:
   ```bash
   # If using npm
   npm install

   # If using bun
   bun install
   ```
*(Note: If you choose to use `npm`, it will create a `package-lock.json` and resolve packages. You might want to remove `bun.lock` and `bun.lockb` to keep your workspace clean).*

### Running the Development Server
To spin up the app locally:
```bash
# If using npm
npm run dev

# If using bun
bun run dev
```

The application will start on `http://localhost:8080` (as defined in `vite.config.ts`). Open this URL in your browser to view the application.

### Next Steps
- You can now safely customize everything inside `src/`.
- If you add more `shadcn/ui` components later on via the `npx shadcn-ui@latest add` command, they will integrate smoothly since `components.json` is already configured.
