/** FireRTC Redialer **/
// Created by Daniel Crooks

/* 
Steps:
1. Go to FireRTCPhone
2. Open the Console
3. Paste everything into the console
*/

// Web Address - https://phone.firertc.com/phone

// Define Variables
var records = "button.btn.btn-recents";
var top_number = '.call-user .fa.fa-phone.fa-2x.fa-fw';
var call = '.btn .fa.fa-phone';

// Click on Previous Calls
$(records).click();

// Select the Top Number
document.querySelector(top_number).click();

// Call the Number
// document.querySelector('.btn .fa.fa-phone').click();
document.querySelector(call).click();
