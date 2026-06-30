import type { MetadataRoute } from "next";

const BASE_URL = "https://www.olympus-talent.com";

// Public, indexable routes. Add new pages here as they ship so Google can find
// them. Booking sub-pages and dynamic job detail pages are intentionally left
// out of the static sitemap.
const ROUTES = [
  "",
  "/jobs",
  "/pricing",
  "/doctrine",
  "/payroll",
  "/hr",
  "/it-engineering",
  "/finance",
  "/hireiq",
  "/about",
  "/contact",
  "/insights",
  "/book/advisory",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/jobs" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
