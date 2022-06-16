require("dotenv").config();
const SQSHelper = require("./SQSHelper");

(async () => {
  const sqs = new SQSHelper();
  //after 30 seconds(default time) the message will appears again
  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    MaxNumberOfMessages: 1
  };
  console.log(await sqs.receiveMessage(params));
})();