import { defineConfig } from "astro/config";

function normalizeSiteUrl(siteUrl) {
  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
}

function normalizeBasePath(basePath) {
  if (!basePath || basePath === "/") {
    return "/";
  }

  const trimmedPath = basePath.replace(/^\/+|\/+$/g, "");
  return `/${trimmedPath}/`;
}

function getSiteUrl() {
  const configuredSiteUrl = process.env.SITE_URL;
  if (configuredSiteUrl) {
    return normalizeSiteUrl(configuredSiteUrl);
  }

  const [owner] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
  if (owner) {
    return `https://${owner}.github.io`;
  }

  return "http://localhost:4321";
}

function getBasePath(siteUrl) {
  const configuredBasePath = process.env.BASE_PATH;
  if (configuredBasePath) {
    return normalizeBasePath(configuredBasePath);
  }

  const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
  if (!owner || !repository) {
    return "/";
  }

  const siteHostname = new URL(siteUrl).hostname;
  const isGitHubPagesDomain = siteHostname.endsWith(".github.io");
  const isUserOrOrgSiteRepo = repository === `${owner}.github.io`;

  if (!isGitHubPagesDomain || isUserOrOrgSiteRepo) {
    return "/";
  }

  return `/${repository}/`;
}

const site = getSiteUrl();

export default defineConfig({
  site,
  base: getBasePath(site),
  output: "static"
});
