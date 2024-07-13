# ChromeDev tool
cd project> Go Live by Google Chrome > Inspect > fixed sript.js file

# Jasmine test
    npm install --save-dev jasmine
    npx jasmine init

Run cm: 

    npx jasmine

Add 

    if(type of module...) //in script.js

Create scriptSpec.js in /spec folder

    const {functions} = require('./script'};
    describe("something", () => {
      it("some-text", () => { var ...; expect(...).toBe(...) });

# Webpack
    npm install webpack webpack-cli html-webpack-plugin --save-dev

Create two directories at the project root: src (move files here) + dist

Create webpack.config.js

    npx webpack 

(Dist is hidden so task is uncompleted, I dont know how to solve it)

# SEO
    <head>
      <meta name="description" content="">
      <tittle>Tittle Name</tittle>
    </head>
    <body>
      <h1>HeadingName</h1>
    </body>
