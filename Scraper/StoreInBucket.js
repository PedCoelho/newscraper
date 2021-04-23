module.exports = function storeInBucket(fileName, data) {
  const AWS = require('aws-sdk');
  AWS.config.loadFromPath('./config.json');

  // Amazon S3 bucket Identifier
  var bucketName = 'oglobo-scraper';
  // Create name for uploaded object key
  var keyName = fileName;

  // Create params for putObject call
  var objectParams = {
    Bucket: bucketName,
    Key: keyName,
    Body: JSON.stringify(data),
  };

  // Create object upload promise
  var uploadPromise = new AWS.S3().putObject(objectParams).promise();

  uploadPromise
    .then((data) => console.log('Successfully uploaded data to ' + bucketName + '/' + keyName))
    .catch((err) => console.error(err, err.stack));
};
