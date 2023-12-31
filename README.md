# Work Day Scheduler

## Description

As an employee with a busy schedule, I want to add important events to a daily planner so that I can manage my time effectively.

This work day scheduler has been achieved by:
* Creating a UI that displays today's date and below, shows time slots for the working day (9am - 5pm).
*  As the time changes throughout the day, the time slots change colour to allow the user to easier identify the time:
    * Grey - For previous time
    * Yellow - For current time
    * Green - For future time 

![screenshot of application colour](./assets/images/work-scheduler-colours.JPG) 

* Each time slot allows the user to add their schedule info and save it so that if the page is refreshed or reloaded, their info persists for that current day.
    * When the save button is clicked, a message appears at the top of the planner to notify the user that the changes have been saved: ![screenshot shpwing save message appearing](./assets/images/work-scheduler-save-msg.JPG)

* When the current date changes, the scheduler resets ready to start adding that days schedule. 
    * Scheduler at 23:59 on 10th Dec 2023: ![screenshot of scheduler at 23:59 on 10th Dec 2023](./assets/images/work-scheduler-23-59.JPG)

    * Scheduler at 00:00 on 11th Dec 2023:![screenshot of scheduler at 00:00 on 11th Dec 2023](./assets/images/work-scheduler-00-00.JPG)




## Installation

![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

Please use the following link to access the website: https://e-davies.github.io/Work-Day-Scheduler/

## Usage

This application will be used by employees to organise their time. 

## Skills used in this project

![Static Badge - HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Static Badge - CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Static Badge - Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Static Badge - JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Static Badge - jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

Also:
* Day.js
* Local Storage