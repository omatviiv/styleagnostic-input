rm .npmignore

# default .npmignore
touch .npmignore
echo "publish.sh" >> .npmignore
echo "node_modules" >> .npmignore
echo "demo" >> .npmignore
echo ".eslintrc.js" >> .npmignore
echo "jest.config.js" >> .npmignore
echo "webpack.js" >> .npmignore
echo "tsconfig.json" >> .npmignore

# npm publish
