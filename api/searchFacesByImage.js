const Q      = require('q');
const lib    = require('../lib/functions.js');
const AWS    = require('aws-sdk');

module.exports = (req, res) => {

    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        apiKey,
        apiSecret,
        collectionId,
        faceMatchThreshold,
        maxFaces,
        imageBytes,
        imageS3Bucket,
        imageS3Name,
        imageS3Version,
        region
    } = req.body.args;
        
    let required = lib.parseReq({apiKey, apiSecret, collectionId, region});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    try {
        if(typeof detectionAttributes == 'string') detectionAttributes = JSON.parse(detectionAttributes);
    } catch(e) {
        throw new RapidError('JSON_VALIDATION');
    }

    if(imageBytes && /^(?:[a-z]+:)/.test(imageBytes)) imageBytes = lib.download(imageBytes);

    let params = lib.clearArgs({
        CollectionId:       collectionId,
        FaceMatchThreshold: faceMatchThreshold,
        MaxFaces:           maxFaces,
        Image: {
            Bytes: imageBytes,
            S3Object: { 
                Bucket:  imageS3Bucket,
                Name:    imageS3Name,
                Version: imageS3Version
            } 
         }
    }, true);

    let client = new AWS.Rekognition({
        credentials: { 
            accessKeyId:     req.body.args['apiKey'], 
            secretAccessKey: req.body.args['apiSecret']
        },
        region: region 
    });

    client.searchFacesByImage(params, (err, data) => {
        if(err) defered.reject(err); 
        else    defered.resolve(data);  
    });

    return defered.promise;
}