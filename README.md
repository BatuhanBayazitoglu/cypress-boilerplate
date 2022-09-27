# Cypress Boilerplate with POM and Cucumber

## Download & Configuration
1. ```npm init``` --> package.json
2. ```npm install cypress cypress-cucumber-preprocessor``` --> package-lock.json , node_modules
3. ```npm install prettier``` --> package.json updated, create .prettierrc file
make configuration file ".prettierrc" to see prettier code
4. ```npx cypress open``` --> open cypress ui  

## Create Scripts
package.json > "scripts" 
```npm run cy:open```  -> open cypress ui 
```npm run cy:run``` -> run headless test ,  create video files


## Imports cucumber
plugins > index.js

## Edit package
package.json > "cypress-cucumber-preprocessor" 


## PS: Delete 'import cy from "cypress"' from step_definition file 
https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/issues/555