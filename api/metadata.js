module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'AWSRekognition',
        "tagline": "AWSRekognition API Package",
        "keywords": ["API"],
        "description": "Notice that images should be uploaded directly.",
        'image': 'http:\/\/logo.clearbit.com\/amazon.com',
        'repo': 'https://github.com/RapidSoftwareSolutions/Marketplace-AWSRekognition-Package',
        'accounts': {
            'domain': 'aws.amazon.com',
            'credentials': [
                'apiKey', 'apiSecret'
            ]
        },
        'blocks': [{
            "name":"compareFaces",
            "description": "Compares a face in the source input image with each face detected in the target input image.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "API key obtained from Amazon",
                    required: true
                },
                {
                    name: "apiSecret",
                    type: "credentials",
                    info: "API secret obtained from Amazon",
                    required: true
                },
                {
                    name: "region",
                    type: "String",
                    info: "AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)",
                    required: true
                },
                {
                    name: "similarityThreshold",
                    type: "Number",
                    info: "The minimum level of confidence in the match you want included in the result.",
                    required: false
                },
                {
                    name: "sourceImageBytes",
                    type: "Blob",
                    info: "Base64-encoded binary data",
                    required: false
                },
                {
                    name: "sourceImageS3Bucket",
                    type: "String",
                    info: "Name of the S3 bucket.",
                    required: false
                },
                {
                    name: "sourceImageS3Name",
                    type: "String",
                    info: "S3 object key name.",
                    required: false
                },
                {
                    name: "sourceImageS3Version",
                    type: "String",
                    info: "If the bucket is versioning enabled, you can specify the object version.",
                    required: false
                },
                {
                    name: "targetImageBytes",
                    type: "Blob",
                    info: "Base64-encoded binary data",
                    required: false
                },
                {
                    name: "targetImageS3Bucket",
                    type: "String",
                    info: "Name of the S3 bucket.",
                    required: false
                },
                {
                    name: "targetImageS3Name",
                    type: "String",
                    info: "S3 object key name.",
                    required: false
                },
                {
                    name: "targetImageS3Version",
                    type: "String",
                    info: "If the bucket is versioning enabled, you can specify the object version.",
                    required: false
                },
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"createCollection",
            "description": "Creates a collection in an AWS Region. You can add faces to the collection using the IndexFaces operation.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "API key obtained from Amazon",
                    required: true
                },
                {
                    name: "apiSecret",
                    type: "credentials",
                    info: "API secret obtained from Amazon",
                    required: true
                },
                {
                    name: "region",
                    type: "String",
                    info: "AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)",
                    required: true
                },
                {
                    name: "collectionId",
                    type: "String",
                    info: "ID for the collection that you are creating.",
                    required: true
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"deleteCollection",
            "description": "Deletes the specified collection. Note that this operation removes all faces in the collection.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "API key obtained from Amazon",
                    required: true
                },
                {
                    name: "apiSecret",
                    type: "credentials",
                    info: "API secret obtained from Amazon",
                    required: true
                },
                {
                    name: "region",
                    type: "String",
                    info: "AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)",
                    required: true
                },
                {
                    name: "collectionId",
                    type: "String",
                    info: "ID for the collection that you are deleting.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"deleteFaces",
            "description": "Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "API key obtained from Amazon",
                    required: true
                },
                {
                    name: "apiSecret",
                    type: "credentials",
                    info: "API secret obtained from Amazon",
                    required: true
                },
                {
                    name: "region",
                    type: "String",
                    info: "AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)",
                    required: true
                },
                {
                    name: "collectionId",
                    type: "String",
                    info: "Collection from which to remove the specific faces.",
                    required: true
                },
                {
                    name: "faceIds",
                    type: "String",
                    info: "An array of face IDs to delete.",
                    required: true
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"detectFaces",
            "description": "Detects faces within an image (JPEG or PNG) that is provided as input.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "API key obtained from Amazon",
                    required: true
                },
                {
                    name: "apiSecret",
                    type: "credentials",
                    info: "API secret obtained from Amazon",
                    required: true
                },
                {
                    name: "region",
                    type: "String",
                    info: "AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)",
                    required: true
                },
                {
                    name: "attributes",
                    type: "JSON",
                    info: "JSON Array of strings.",
                    required: false
                },
                {
                    name: "imageBytes",
                    type: "Blob",
                    info: "Base64-encoded binary data",
                    required: false
                },
                {
                    name: "imageS3Bucket",
                    type: "String",
                    info: "Name of the S3 bucket.",
                    required: false
                },
                {
                    name: "imageS3Name",
                    type: "String",
                    info: "S3 object key name.",
                    required: false
                },
                {
                    name: "imageS3Version",
                    type: "String",
                    info: "If the bucket is versioning enabled, you can specify the object version.",
                    required: false
                },
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"detectLabels",
            "description": "Detects instances of real-world labels within an image (JPEG or PNG) provided as input.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "API key obtained from Amazon",
                    required: true
                },
                {
                    name: "apiSecret",
                    type: "credentials",
                    info: "API secret obtained from Amazon",
                    required: true
                },
                {
                    name: "region",
                    type: "String",
                    info: "AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)",
                    required: true
                },
                {
                    name: "maxLabels",
                    type: "Number",
                    info: "Maximum number of labels you want the service to return in the response. The service returns the specified number of highest confidence labels.",
                    required: false
                },
                {
                    name: "minConfidence",
                    type: "Number",
                    info: "Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with confidence lower than this specified value.",
                    required: false
                },
                {
                    name: "imageBytes",
                    type: "Blob",
                    info: "Base64-encoded binary data",
                    required: false
                },
                {
                    name: "imageS3Bucket",
                    type: "String",
                    info: "Name of the S3 bucket.",
                    required: false
                },
                {
                    name: "imageS3Name",
                    type: "String",
                    info: "S3 object key name.",
                    required: false
                },
                {
                    name: "imageS3Version",
                    type: "String",
                    info: "If the bucket is versioning enabled, you can specify the object version.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getIndexFaces",
            "description": "Detects faces in the input image and adds them to the specified collection.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "API key obtained from Amazon",
                    required: true
                },
                {
                    name: "apiSecret",
                    type: "credentials",
                    info: "API secret obtained from Amazon",
                    required: true
                },
                {
                    name: "region",
                    type: "String",
                    info: "AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)",
                    required: true
                },
                {
                    name: "collectionId",
                    type: "String",
                    info: "ID of an existing collection to which you want to add the faces that are detected in the input images.",
                    required: true
                },
                {
                    name: "externalImageId",
                    type: "String",
                    info: "ID you want to assign to all the faces detected in the image.",
                    required: false
                },
                {
                    name: "detectionAttributes",
                    type: "JSON",
                    info: "JSON Array of Strings. Returns detailed attributes of indexed faces. By default, the operation returns a subset of the facial attributes.",
                    required: false
                },
                {
                    name: "imageBytes",
                    type: "Blob",
                    info: "Base64-encoded binary data",
                    required: false
                },
                {
                    name: "imageS3Bucket",
                    type: "String",
                    info: "Name of the S3 bucket.",
                    required: false
                },
                {
                    name: "imageS3Name",
                    type: "String",
                    info: "S3 object key name.",
                    required: false
                },
                {
                    name: "imageS3Version",
                    type: "String",
                    info: "If the bucket is versioning enabled, you can specify the object version.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getCollections",
            "description": "Returns list of collection IDs in your account. If the result is truncated, the response also provides a NextToken that you can use in the subsequent request to fetch the next set of collection IDs.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "API key obtained from Amazon",
                    required: true
                },
                {
                    name: "apiSecret",
                    type: "credentials",
                    info: "API secret obtained from Amazon",
                    required: true
                },
                {
                    name: "region",
                    type: "String",
                    info: "AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)",
                    required: true
                },
                {
                    name: "maxResults",
                    type: "String",
                    info: "Maximum number of collection IDs to return.",
                    required: false
                },
                {
                    name: "nextToken",
                    type: "String",
                    info: "Pagination token from the previous response.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getFaces",
            "description": "Returns metadata for faces in the specified collection. This metadata includes information such as the bounding box coordinates, the confidence (that the bounding box contains a face), and face ID.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "API key obtained from Amazon",
                    required: true
                },
                {
                    name: "apiSecret",
                    type: "credentials",
                    info: "API secret obtained from Amazon",
                    required: true
                },
                {
                    name: "region",
                    type: "String",
                    info: "AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)",
                    required: true
                },
                {
                    name: "collectionId",
                    type: "String",
                    info: "ID of the collection from which to list the faces.",
                    required: true
                },
                {
                    name: "maxResults",
                    type: "String",
                    info: "Maximum number of faces to return.",
                    required: false
                },
                {
                    name: "nextToken",
                    type: "String",
                    info: "If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of faces.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"searchFaces",
            "description": "",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "API key obtained from Amazon",
                    required: true
                },
                {
                    name: "apiSecret",
                    type: "credentials",
                    info: "API secret obtained from Amazon",
                    required: true
                },
                {
                    name: "region",
                    type: "String",
                    info: "AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)",
                    required: true
                },
                {
                    name: "collectionId",
                    type: "String",
                    info: "ID of the collection to search.",
                    required: true
                },
                {
                    name: "faceId",
                    type: "String",
                    info: "ID of a face to find matches for in the collection.",
                    required: true
                },
                {
                    name: "faceMatchThreshold",
                    type: "String",
                    info: "Optional value specifying the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%.",
                    required: false
                },
                {
                    name: "maxFaces",
                    type: "String",
                    info: "Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"searchFacesByImage",
            "description": "For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection.",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "API key obtained from Amazon",
                    required: true
                },
                {
                    name: "apiSecret",
                    type: "credentials",
                    info: "API secret obtained from Amazon",
                    required: true
                },
                {
                    name: "region",
                    type: "String",
                    info: "AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)",
                    required: true
                },
                {
                    name: "faceMatchThreshold",
                    type: "String",
                    info: "Specifies the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%.",
                    required: false
                },
                {
                    name: "maxFaces",
                    type: "Number",
                    info: "Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.",
                    required: false
                },
                {
                    name: "collectionId",
                    type: "String",
                    info: "ID of the collection to search.",
                    required: true
                },
                {
                    name: "imageBytes",
                    type: "Blob",
                    info: "Base64-encoded binary data",
                    required: false
                },
                {
                    name: "imageS3Bucket",
                    type: "String",
                    info: "Name of the S3 bucket.",
                    required: false
                },
                {
                    name: "imageS3Name",
                    type: "String",
                    info: "S3 object key name.",
                    required: false
                },
                {
                    name: "imageS3Version",
                    type: "String",
                    info: "If the bucket is versioning enabled, you can specify the object version.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }]
    })
};
