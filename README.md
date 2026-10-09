
# lol stonks

![lol stonks](/assets/elon-lol.jpg)

https://lolstonks.com/

## development

Built with [Astro](https://astro.build/). Node 22.16.0 (`.nvmrc`) and Yarn 4.9.1 (Berry, via
[Corepack](https://yarnpkg.com/corepack); pinned in `packageManager`).

```bash
nvm use
corepack enable
yarn install
yarn dev         # http://localhost:4321
yarn run build   # static output in ./dist
yarn preview
yarn check       # astro check
```

## deployment

Cloudflare Pages, build command `yarn run build`, output directory `dist`.

Node 22.16.0 and Yarn 4.9.1 are the Cloudflare Pages build image v3 defaults, so no `NODE_VERSION` or
`YARN_VERSION` overrides are needed. Pages ignores `packageManager` and detects Yarn from `yarn.lock`;
the two only stay in step while the pin matches the image default, so do not bump past it.
