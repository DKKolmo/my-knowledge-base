// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kkolmo.com',
  base: '/my-knowledge-base',
  integrations: [
    starlight({
      title: "Kolmo's Blog",
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DKKolmo/my-knowledge-base' }],
      sidebar: [
        {
          label: '学习笔记',
          items: [{ autogenerate: { directory: 'guides' } }],
        },
        {
          label: '参考资料',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
});
