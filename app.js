
const accountSid = "AC98b2ff2836d782c49781739f066264d6";
const authToken = "c2391e428fe341f4794b26f0422eea90";
const client = require('twilio')(accountSid, authToken);


client.messages
    .create({
        body: 'Your appointment is coming up on July 21 at 3PM',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+13478062559'
    })
    .then(message => console.log(message.sid))
    
    
/*const express = require('express')
const twilio= require('twilio')
const dotenv = require('dotenv')
const app = express()
const AUTH_ID = c2391e428fe341f4794b26f0422eea90
const SID = US498a5a81122296688a5ea1db218b3f90
//https://console.twilio.com/us1/develop/sms/try-it-out/send-an-sms

dotenv.config()
*/

/*
function sendSMS(){
    //we need to get the authentication token and ssid
    const client = new twilio(SID, AUTH_ID)
    
    client.messages
    .create({body:'Hey this is a message',
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+13478062559'})
    .then(message => {

        console.log(message, "Message Sent")

    })
    .done()
}

sendSMS()*/
/*
const accountSid = 'AC98b2ff2836d782c49781739f066264d6';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);
*/
//app.listen(5000, () => console.log('Listening at port 5000'))


//twilio can send whatsapp functions

//we can use it to send emails aswell
//L@QM4QQMvx-s@Nf78
//nathanrvazquez@gmail.com
//use npm init --yes to create the node js files

// use npm i twilio express
//express is a server
//npm i dotenv
