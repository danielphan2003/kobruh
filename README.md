# Welcome to [Kobruh](https://kobruh.netlify.app)

> 🧑‍🚀 **I really want to fly** But then I won't be able to flop.

## 🚀 Project Structure

Inside of our project, you'll see the following folders and files:

```
/
├── .vscode/
├── public/
│   ├── assets/
│   ├── robots.txt
│   └── favicon.png
├── layouts/
│   └── BasicLayout.astro
├── src/
│   ├── components/
│   │   ├── MenuNav/
│   │   ├── SearchBar/
│   │   ├── TopNav/
│   │   └── Button.astro
│   └── pages/
│       ├── $movie.astro
│       └── index.astro
├── .envrc
├── .gitignore
├── .npmrc
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── README.md
├── shell.nix
├── snowpack.config.mjs
└── tailwind.config.js
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
|:----------------|:--------------------------------------------|
| `pnpm install`  | Installs dependencies                       |
| `pnpm start`    | Starts local dev server at `localhost:3000` |
| `pnpm build`    | Build your production site to `./dist/`     |

## 👀 Want to learn more?

Feel free to check [astro documentation](https://github.com/snowpackjs/astro) or jump into Astro's [Discord server](https://astro.build/chat).
