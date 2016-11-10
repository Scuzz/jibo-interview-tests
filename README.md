# electron-tests-skills

## Pre-Requisites
This app assumes you have installed node and java already

## Setup
Open a powershell and CD to the location of your jibo-interview-tests folder(example command below)

```
CD C:\Users\YOUR_USERNAME\Downloads\jibo-interview-tests-master
```

## Install and Start ChromeDriver

```
npm install chrome-driver
```

Once installation is complete we can start ChromeDriver

```
./node_modules/.bin/chromedriver
```

## Install Remaining Required Node Modules
Open another powershell window(keep the previous window open since we need ChromeDriver running) and CD to the same location from above

```
npm install selenium-webdriver
```

```
npm install mocha
```

```
npm install chai
```

## Install Our Electron App

```
npm install
electron .
```

## To Run Automated Tests
(assuming tests are implemented in tests/yourTestCode.js)

```
npm test
```
