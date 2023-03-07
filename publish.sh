# -- 1 publish latest (default - latest npm tag) version --
echo "== npm publish"
npm publish

# -- 2 publish demo version --
echo "== increment patch version in package.json"
# we store version into variable
version=$((npm version patch) 2>&1)

# demo .npmignore
echo "!demo/index.tsx" >> .npmignore
echo "!demo/style.ts" >> .npmignore

packageName="styleagnostic-input"
echo "-------- $packageName@$version:1"
npm dist-tag add "$packageName@$version:1" demo
