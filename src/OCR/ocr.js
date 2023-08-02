const vision = require('@google-cloud/vision');
// const client = new vision.ImageAnnotatorClient(CONFIG);

const client = new vision.ImageAnnotatorClient({
  keyFilename: 'key.json',
});

// Performs label detection on the image file
client
  .textDetection('./jdmtext.jpg')
  .then((results) => {
    const text = results[0].textAnnotations;

    text.forEach((label) => console.log(label.text));
    console.log(results);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
