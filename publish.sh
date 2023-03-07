# -- 1 publish latest (default - latest npm tag) version --
echo "== npm publish"
npm publish

# -- 2 publish demo version --
echo "== increment patch version in package.json"
VERSION=""
npm version patch >> VERSION
echo "=========== VERSION = ${$VERSION}"

# demo .npmignore
echo "!demo/index.tsx" >> .npmignore
echo "!demo/style.ts" >> .npmignore

# npm dist-tag add styleagnostic-input@0.0.5 demo
