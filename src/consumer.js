var kafka = require("kafka-node"),
  Consumer = kafka.Consumer,
  client = new kafka.KafkaClient("localhost:2181"),
  consumer = new Consumer(client, [{ topic: "kafka-node-dev" }], {
    autoCommit: false,
  });

consumer.on("message", function (message) {
  console.log(message);
});
