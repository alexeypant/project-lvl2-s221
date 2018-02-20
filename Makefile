install: 
	npm install

start-help: 
	npm run babel-node -- src/bin/gendiff.js -h

start-diff: 
	npm run babel-node -- src/bin/gendiff.js '__tests__/__fixtures__/before.json', '__tests__/__fixtures__/after.json'

publish:
	npm publish

test: 
	npm test

lint:
	npm run eslint .
