import rekognitionClient from "./rekognition";

const detectCelebrity = async (photo) => {
  const params = {
    Image: {
      Bytes: await photo.arrayBuffer(),
    },
  };

  return new Promise((resolve, reject) => {
    rekognitionClient.recognizeCelebrities(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.CelebrityFaces.length > 0);
      }
    });
  });
};

export default detectCelebrity;
