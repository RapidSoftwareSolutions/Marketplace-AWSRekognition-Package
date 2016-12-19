const Q      = require('q');
const lib    = require('../lib/functions.js');
const AWS    = require('aws-sdk');

module.exports = (req, res) => {

    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        apiKey,
        apiSecret,
        region='us-east-1',
        maxLabels,
        minConfidence,
        imageS3Bucket,
        imageS3Name,
        imageS3Version,
    } = req.body.args;
        
    let required = lib.parseReq({apiKey, apiSecret, region, imageS3Bucket, imageS3Name});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    if(image && /^(?:[a-z]+:)/.test(image)) image = lib.download(image);

    let client  = new AWS.Rekognition({
        credentials: { 
            accessKeyId:     req.body.args['apiKey'], 
            secretAccessKey: req.body.args['apiSecret']
        },
        region: region
    });
    
    let params = lib.clearArgs({
        MaxLabels:     maxLabels,
        MinConfidence: minConfidence,
        Image: {
            // Bytes: image,
            S3Object: { 
                Bucket:  imageS3Bucket,
                Name:    imageS3Name,
                Version: imageS3Version
            } 
         }
    }, true);

    client.detectLabels(params, (err, data) => {
        if(err) defered.reject(data || err); 
        else    defered.resolve(data);  
    });

    return defered.promise;
}