import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import mdx from "@astrojs/mdx";
import m2dx from "astro-m2dx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from "rehype-external-links";
import fauxRemarkEmbedder from "@remark-embedder/core";
import fauxOembedTransformer from "@remark-embedder/transformer-oembed";
import { defineConfig } from 'astro/config';
const remarkEmbedder = fauxRemarkEmbedder.default;
const oembedTransformer = fauxOembedTransformer.default;
import vue from "@astrojs/vue";
/** @type {import('astro-m2dx').Options} */
import prefetch from "@astrojs/prefetch";
import compress from "astro-compress";
import netlify from "@astrojs/netlify/functions";
const m2dxOptions = {
  exportComponents: true,
  unwrapImages: true,
  autoImports: true
};

export default defineConfig({
  site: 'https://joseagustinalvarenga.github.io',
  base: '/estudioJuridico',
});

