# cloud-iot
Repository created for the discipline of Cloud and IoT of UFPB.


## Run Websocket service

To run the websocket service, run the following commands:

`$cd websocket`
`$npm i`
`$nodemon index.js`


## Publish the Serverless project into AWS

To publish the serverless project into AWS, you need to configure a profile using aws-cli (mode detailed [here](https://docs.aws.amazon.com/pt_br/cli/latest/userguide/cli-chap-configure.html)).
After installing the aws-cli and configuring your profile, you just need to run the following commands:

`$cd backend
`$serverless deploy -v`
