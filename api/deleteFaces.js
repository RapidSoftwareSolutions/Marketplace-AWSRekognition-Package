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
        faceIds,
        region
    } = req.body.args;
        
    let required = lib.parseReq({apiKey, apiSecret, collectionId, faceIds, region});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    try {
        if(typeof faceIds == 'string') faceIds = JSON.parse(faceIds);
    } catch(e) {
        throw new RapidError('JSON_VALIDATION');
    }

    let client = new AWS.Rekognition({
        credentials: { 
            accessKeyId:     req.body.args['apiKey'], 
            secretAccessKey: req.body.args['apiSecret']
        },
        region: region
    });

    let params = lib.clearArgs({
        CollectionId: collectionId,
        FaceIds:      faceIds
    });

    client.deleteFaces(params, (err, data) => {
        if(err) defered.reject(err); 
        else    defered.resolve(data);  
    });

    return defered.promise;
}