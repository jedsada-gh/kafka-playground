const kafka = require("kafka-node");
const client = new kafka.KafkaClient("172.16.2.248:2181");

const Producer = kafka.Producer;
const producer = new Producer(client);
const sentMessage = JSON.stringify("Hello The Hoi Man");

producer.on("ready", function () {
  console.log("Producer is ready");

  send(sentMessage);
});

function send(sentMessage) {
  payloads = [{ topic: "kafka-node-dev", messages: sentMessage, partition: 0 }];
  producer.send(payloads, function (err, data) {
    console.log("send data ", sentMessage);
  });
}
