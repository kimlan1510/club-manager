# _Club Manager_

#### _Angular2 cli & Firebase practice project at Epicodus_

#### By _**Kimlan Nguyen**_

## Description

_This program uses angular 2 framework and typescript to display information about animals at a zoo._
_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0._

## Specifications

 | Behavior   |Input Example   | Output Example  |
 |---------------- |:----------:|:------------: |
 |Navigation bar appears across all pages| navigate to different pages| navigation bar appears on top of page|
 |Be able to navigate to home page and about-us page|click on home page or aboutus page | display: home page or aboutus page|
 |all players are listed on a separated page |navigate to all players page | display: all players|
 |Be able to click on individual player to see more detail | click on a player | navigate to a different page, showing all detail about that player|
 |Be able to edit a player's information| player name Ezreal is changed to player name Lucian | display: player name Lucian|
 |Be able to delete a player| player Ezreal is removed | player Ezreal is removed from database|
 |Player's information is store in firebase database|  player name Ezreal is changed to player name Lucian | player name Lucian is store in firebase database|



## Setup/Installation Requirements
* _This program requires node.js, npm and typescript to run. Follow the instruction here https://www.learnhowtoprogram.com/javascript/angular-js/typescript-introduction-and-installation to install them onto your system._
* _Clone this file using Git. On OSX, open terminal (open Windows PowerShell on Windows), and type in the following: git clone [url], where [url] is the github repository url._
* _Sign up for a Firebase account at firebase.google.com._
* _Visit your Firebase Console and click Add project._
* _Create a new project_
* _Click 'Add Firebase to your web app' to obtain api keys._
* _In the app folder of this project, create the file 'api-keys.ts'._
* Copy the following code and paste it in api-keys.ts:
* export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };
* where "xxx" is the specific Firebase credential you obtained earlier.
* _Go back to Firebase website, on the left-hand side panel, click Database option._
* _Select the 3 vertical dots on the right-hand side and select 'import JSON'._
* _Navigate to the project folder and select Database.json._
* _In terminal or Windows PowerShell, navigate to the project folder, ex: cd Desktop/ClubManager_
* _Enter the following:_
* _npm install_
* _bower install_
* _ng serve_
* _Navigate to `http://localhost:4200/`._

## Known Bugs

_There are no bugs that I am awared of._

## Support and contact details

_Kimlan1510@gmail.com_

## Technologies Used

* _HTML_
* _CSS_
* _npm_
* _bower_
* _Typescript_
* _Angular2 cli_
* _Firebase_


### License

*This program is licensed under MIT License.*

Copyright (c) 2017 **_Kimlan Nguyen_**
