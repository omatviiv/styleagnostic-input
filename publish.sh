# -- 1 publish latest (default - latest npm tag) version --
echo "== remove current .npmignore"
rm .npmignore

# default .npmignore
echo "== create new .npmignore for default - latest npm tag"
touch .npmignore
echo "publish.sh" >> .npmignore
echo "node_modules" >> .npmignore
echo ".eslintrc.js" >> .npmignore
echo "jest.config.js" >> .npmignore
echo "webpack.js" >> .npmignore
echo "tsconfig.json" >> .npmignore
echo "demo/*" >> .npmignore

echo "== publish"
npm publish

# -- 2 publish demo version --
echo "== increment patch version in package.json"
npm version patch

# demo .npmignore
echo "!demo/index.tsx" >> .npmignore
echo "!demo/style.ts" >> .npmignore

# npm dist-tag add styleagnostic-input@0.0.5 demo
