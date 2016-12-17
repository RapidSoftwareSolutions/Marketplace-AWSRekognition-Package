const Q      = require('q');
const lib    = require('../lib/functions.js');
const AWS    = require('aws-sdk');

module.exports = (req, res) => {

    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        apiKey,
        apiSecret,
        attributes,
        image,
        imageS3Bucket,
        imageS3Name,
        imageS3Version,
        region
    } = req.body.args;
        
    let required = lib.parseReq({apiKey, apiSecret, region});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    if(!image || !(imageS3Name || imageS3Bucket))
        throw new RapidError('REQUIRED_FIELDS_SET', ['image', ['imageS3Bucket', 'imageS3Name']]);


    let client  = new AWS.Rekognition({
        credentials: { 
            accessKeyId:     req.body.args['apiKey'], 
            secretAccessKey: req.body.args['apiSecret']
        },
        region: region
    });

    try {
        if(typeof attributes == 'string') attributes = JSON.parse(attributes);
    } catch(e) {
        throw new RapidError('JSON_VALIDATION');
    }

    if(image && /^(?:[a-z]+:)/.test(image)) image = lib.download(image);

    let params = lib.clearArgs({
        Attributes: attributes,
        Image: {
            Bytes: image,
            S3Object: { 
                Bucket:  imageS3Bucket,
                Name:    imageS3Name,
                Version: imageS3Version
            } 
         }
    }, true);

    client.detectFaces(params, (err, data) => {
        if(err) defered.reject(err); 
        else    defered.resolve(data);  
    });

    return defered.promise;
}