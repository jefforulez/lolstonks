// https://docs.astro.build/en/reference/configuration-reference/
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

export default defineConfig({
  site: 'https://www.lolstonks.com',
  integrations: [
    icon(),
  ],
})
