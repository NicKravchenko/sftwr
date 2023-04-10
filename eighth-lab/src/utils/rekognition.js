import AWS from "aws-sdk";

const rekognitionClient = new AWS.Rekognition({
  accessKeyId: "AKIAIE5LZMZN4CR6IO5Q",
  secretAccessKey: "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",
  region: "us-east-1",
});

export default rekognitionClient;
