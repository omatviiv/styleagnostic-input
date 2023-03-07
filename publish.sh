# -- 1 publish latest (default - latest npm tag) version --
echo "== npm publish"
npm publish

# -- 2 publish demo version --
echo "== increment patch version in package.json"
VERSION=$((npm version patch) 2>&1)
# VERSION:1 removes first character which position is 0
echo "=========== VERSION = ${VERSION:1}"

# demo .npmignore
echo "!demo/index.tsx" >> .npmignore
echo "!demo/style.ts" >> .npmignore

# npm dist-tag add styleagnostic-input@$VERSION:1 demo
