# -- 1 publish latest (default - latest npm tag) version --
rm .npmignore

# default .npmignore
touch .npmignore
echo "publish.sh" >> .npmignore
echo "node_modules" >> .npmignore
echo ".eslintrc.js" >> .npmignore
echo "jest.config.js" >> .npmignore
echo "webpack.js" >> .npmignore
echo "tsconfig.json" >> .npmignore
echo "demo/*" >> .npmignore

npm publish

# -- 2 publish demo version --
rm .npmignore

npm version patch

# demo .npmignore
touch .npmignore
echo "!demo/index.tsx" >> .npmignore
echo "!demo/style.ts" >> .npmignore

# npm dist-tag add styleagnostic-input@0.0.5 demo
