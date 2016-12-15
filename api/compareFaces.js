/*
"apiKey": "",
"apiSecret": "",
"sourceImageS3Bucket": "imrapidrekog",
"sourceImageS3Name": "dTGpRc5iWnE.jpg",
"targetImageS3Bucket": "imrapidrekog",
"targetImageS3Name": "dTGpRc5iWnE.jpg"
*/

const Q      = require('q');
const lib    = require('../lib/functions.js');
const AWS    = require('aws-sdk');

module.exports = (req, res) => {

    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        apiKey,
        apiSecret,
        similarityThreshold,
        sourceImage,
        region,
        sourceImageS3Bucket,
        sourceImageS3Name,
        sourceImageS3Version,
        targetImage,
        targetImageS3Bucket,
        targetImageS3Name,
        targetImageS3Version
    } = req.body.args;
        
    let required = lib.parseReq({apiKey, apiSecret, region});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let client  = new AWS.Rekognition({
        credentials: { 
            accessKeyId:     req.body.args['apiKey'], 
            secretAccessKey: req.body.args['apiSecret']
        },
        region: region
    });

    if(sourceImage && /^(?:[a-z]+:)/.test(sourceImage)) sourceImage = lib.download(sourceImage);
    if(targetImage && /^(?:[a-z]+:)/.test(targetImage)) targetImage = lib.download(targetImage);

    let params = lib.clearArgs({
         SimilarityThreshold: similarityThreshold,
         SourceImage: {
            Bytes: sourceImage,
            S3Object: { 
                Bucket:  sourceImageS3Bucket,
                Name:    sourceImageS3Name,
                Version: sourceImageS3Version
            } 
         },
         TargetImage: {
            Bytes: targetImage,
            S3Object: { 
                Bucket:  targetImageS3Bucket,
                Name:    targetImageS3Name,
                Version: targetImageS3Version
            } 
         }
    }, true);

    client.compareFaces(params, (err, data) => {
        if(err) defered.reject(err); 
        else    defered.resolve(data);  
    });

    return defered.promise;
}