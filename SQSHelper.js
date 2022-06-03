const { SQSClient, ListQueuesCommand } = require("@aws-sdk/client-sqs");
class SQSHelper {
  constructor() {
    this.sqsClient = new SQSClient({region:'us-east-1'});
  }

  listQueues() {
    return this.sqsClient.send(new ListQueuesCommand({}));
  }
}

module.exports = SQSHelper;