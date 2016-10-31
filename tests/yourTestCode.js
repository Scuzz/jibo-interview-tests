var chai = require('chai');
var expect = chai.expect;
const webdriver = require('selenium-webdriver')

describe('Tests', function(){
  this.timeout(15000);

  var driver;

  before(function() {
    driver = new webdriver.Builder()
      // The "9515" is the port opened by chrome driver.
      .usingServer('http://localhost:9515')
      .withCapabilities({
        chromeOptions: {
        // Here is the path to your Electron binary.
        binary: './node_modules/electron/dist/electron.exe',
        args: ['app=' + '.'] // Arg to run our app from the current location
        }
      })
      .forBrowser('electron')
      .build();
  });

  // Close the app when we are done
  after(function() {
    return driver.quit();
  });

  // First we'll test clicking ButtonA first and then clicking ButtonB
  it('Click ButtonA first and then click ButtonB and check the value of the text box for a valid number', function() {
    // Click ButtonA
    driver.findElement(webdriver.By.id('ButtonA')).click();
    // Click ButtonB
    driver.findElement(webdriver.By.id('ButtonB')).click();
    // Get the value that's currently in the textbox
    return driver.findElement(webdriver.By.id('sampleTextBox')).getAttribute("value").then(function(text) {
      expect(isNumeric(text)).to.be.true; // Since the value we get from the above step is going to be in string format, let's run it through our isNumeric function to check if it's a valid number
    });
  });
  // Now let's try clicking ButtonB first and then clicking ButtonA
  it('Click ButtonB first and then click ButtonA and check the value of the text box for a valid number', function() {
    // Click ButtonB first time time 
    driver.findElement(webdriver.By.id('ButtonB')).click();
    // Click ButtonA next
    driver.findElement(webdriver.By.id('ButtonA')).click();
    // Get the value that's currently in the textbox
    return driver.findElement(webdriver.By.id('sampleTextBox')).getAttribute("value").then(function(text) {
      expect(isNumeric(text)).to.be.true; // Check the value from above using our isNumeric function again
    });
  });
});

// Function to parse a string to see if it's a valid number
function isNumeric(num){
    return !isNaN(num)
}

