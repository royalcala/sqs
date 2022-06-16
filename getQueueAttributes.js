require("dotenv").config();
const SQSHelper = require("./SQSHelper");

(async () => {
  const sqs = new SQSHelper();
  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    AttributeNames: ["All"],
  };
  console.log(await sqs.getQueueAttributes(params));
})();