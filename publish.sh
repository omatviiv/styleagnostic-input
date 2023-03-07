# -- 1 publish latest (default - latest npm tag) version --
echo "== npm publish"
npm publish

# -- 2 publish demo version --
echo "== increment patch version in package.json"
# we store version into variable VERSION
VERSION=$((npm version patch) 2>&1)

# demo .npmignore
echo "!demo/index.tsx" >> .npmignore
echo "!demo/style.ts" >> .npmignore

PACKAGE_AND_VERSION="styleagnostic-input@${VERSION:1}"
npm dist-tag add $PACKAGE_AND_VERSION demo
