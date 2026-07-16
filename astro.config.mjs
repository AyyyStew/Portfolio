import { defineConfig } from "astro/config";

function getBasePath() {
  const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];

  if (!repository || repository.endsWith(".github.io")) {
    return "/";
  }

  return `/${repository}/`;
}

export default defineConfig({
  site: "https://example.github.io",
  base: getBasePath(),
  output: "static"
});
