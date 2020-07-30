const app = require('./app');
const cypress = require('cypress');
const cron = require('node-cron');

async function main () {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
};

main();

var task = cron.schedule("46 15 * 7 *", function() {
    console.log("schedule running...");
    cypress.run ({
        spec: './cypress/integration/main.js',
        //spec: specs[`${specStored}`],
        headless: true,
        //browser: "electron",
        browser: "chrome",
        config: {
          video: true,
          baseUrl: 'http://localhost:5000'
          //video: true
        }
      }).then((results) => {
          console.log(results);
      }).catch((err) => {
          console.log(err);
      })
    //cypress.open();
});