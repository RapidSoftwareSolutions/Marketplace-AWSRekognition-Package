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
        faceId,
        faceMatchThreshold,
        maxFaces,
        region
    } = req.body.args;
        
    let required = lib.parseReq({apiKey, apiSecret, collectionId, faceId, region});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let params = lib.clearArgs({
        CollectionId: collectionId,
        FaceId: faceId,
        FaceMatchThreshold: faceMatchThreshold,
        MaxFaces: maxFaces
    }, true);

    let client = new AWS.Rekognition({
        credentials: { 
            accessKeyId:     req.body.args['apiKey'], 
            secretAccessKey: req.body.args['apiSecret']
        },
        region: region 
    });

    client.searchFaces(params, (err, data) => {
        if(err) defered.reject(err); 
        else    defered.resolve(data);  
    });

    return defered.promise;
}