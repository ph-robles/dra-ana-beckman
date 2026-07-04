import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/sample-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sobre",
    "/procedimentos",
    "/antes-depois",
    "/depoimentos",
    "/faq",
    "/blog",
    "/contato",
    "/politica-de-privacidade",
    "/politica-de-cookies",
    "/termos-de-uso",
    "/lgpd",
  ].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
