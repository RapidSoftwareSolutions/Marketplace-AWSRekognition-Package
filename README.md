# AWSRekognition Package
Detect objects, scenes, and faces in images
* Domain: aws.amazon.com
* Credentials: apiKey, apiSecret

## How to get credentials:
**Step 1:** Create a new access key, which includes a new secret access key.
+ To create a new secret access key for your root account, use the security credentials page. Expand the Access Keys section, and then click **Create New Root Key**.
+ To create a new secret access key for an IAM user, open the IAM console. Click Users in the Details pane, click the appropriate IAM user, and then click **Create Access Key** on the **Security Credentials** tab.

> Note: If you already have the maximum of two access keys—active or inactive—you must delete one first before proceeding. If you need more than two root access keys, IAM users (each of whom can be assigned their own access keys) would probably better suit your requirements.

**Step 2**: Enable AWS Rekognation permissions to your user.
+ Click on the **Permissions** tab, then on **Add permissions** button
+ Click **Create group** button,. fill in `Group name` field and select *AmazonRekognitionFullAccess* in the pop-up and press *Create group* button.
+ After all, click on **Next: Review** button and on **Add permissions** on Review page.

## AWSRekognition.compareFacesInImages
Compares a face in the source input image with each face detected in the target input image.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| API key obtained from Amazon
| apiSecret          | credentials| API secret obtained from Amazon
| region             | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| similarityThreshold| Number     | The minimum level of confidence in the match you want included in the result.
| sourceImage        | File       | File or url
| targetImage        | File       | File or url

## AWSRekognition.compareFacesInS3Images
Compares a face in the source input image with each face detected in the target input image.

| Field               | Type       | Description
|---------------------|------------|----------
| apiKey              | credentials| API key obtained from Amazon
| apiSecret           | credentials| API secret obtained from Amazon
| region              | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| similarityThreshold | Number     | The minimum level of confidence in the match you want included in the result.
| sourceImageS3Bucket | String     | Name of the S3 bucket.
| sourceImageS3Name   | String     | S3 object key name.
| sourceImageS3Version| String     | If the bucket is versioning enabled, you can specify the object version.
| targetImageS3Bucket | String     | Name of the S3 bucket.
| targetImageS3Name   | String     | S3 object key name.
| targetImageS3Version| String     | If the bucket is versioning enabled, you can specify the object version.

## AWSRekognition.createCollection
Creates a collection in an AWS Region. You can add faces to the collection using the IndexFaces operation.

| Field           | Type       | Description
|-----------------|------------|----------
| apiKey          | credentials| API key obtained from Amazon
| apiSecret       | credentials| API secret obtained from Amazon
| region          | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| collectionId    | String     | ID for the collection that you are creating.

## AWSRekognition.deleteCollection
Deletes the specified collection. Note that this operation removes all faces in the collection.

| Field       | Type       | Description
|-------------|------------|----------
| apiKey      | credentials| API key obtained from Amazon
| apiSecret   | credentials| API secret obtained from Amazon
| region      | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| collectionId| String     | ID for the collection that you are deleting.

## AWSRekognition.deleteFacesFromCollection
Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection.

| Field           | Type       | Description
|-----------------|------------|----------
| apiKey          | credentials| API key obtained from Amazon
| apiSecret       | credentials| API secret obtained from Amazon
| region          | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| collectionId    | String     | Collection from which to remove the specific faces.
| faceIds         | String     | An array of face IDs to delete.

## AWSRekognition.detectFacesInImage
Detects faces within an image (JPEG or PNG) that is provided as input.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| API key obtained from Amazon
| apiSecret | credentials| API secret obtained from Amazon
| region    | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| attributes| JSON       | SON Array of strings. A list of facial attributes you would like to be returned. By default, the API returns subset of facial attributes. Valid values: `ALL`, `DEFAULT`
| image     | File       | File or url

## AWSRekognition.detectFacesInS3Image
Detects faces within an image (JPEG or PNG) that is provided as input.

| Field            | Type       | Description
|------------------|------------|----------
| apiKey           | credentials| API key obtained from Amazon
| apiSecret        | credentials| API secret obtained from Amazon
| region           | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| attributes       | JSON       | SON Array of strings. A list of facial attributes you would like to be returned. By default, the API returns subset of facial attributes. Valid values: `ALL`, `DEFAULT`
| imageS3Bucket    | String     | Name of the S3 bucket.
| imageS3Name      | String     | S3 object key name.
| imageS3Version   | String     | If the bucket is versioning enabled, you can specify the object version.

## AWSRekognition.detectLabelsInImage
Detects instances of real-world labels within an image (JPEG or PNG) provided as input.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| API key obtained from Amazon
| apiSecret    | credentials| API secret obtained from Amazon
| region       | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| maxLabels    | Number     | Maximum number of labels you want the service to return in the response. The service returns the specified number of highest confidence labels.
| minConfidence| Number     | Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with confidence lower than this specified value.
| image        | File       | File or url

## AWSRekognition.detectLabelsInS3Image
Detects instances of real-world labels within an image (JPEG or PNG) provided as input.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| API key obtained from Amazon
| apiSecret     | credentials| API secret obtained from Amazon
| region        | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| maxLabels     | Number     | Maximum number of labels you want the service to return in the response. The service returns the specified number of highest confidence labels.
| minConfidence | Number     | Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with confidence lower than this specified value.
| imageS3Bucket | String     | Name of the S3 bucket.
| imageS3Name   | String     | S3 object key name.
| imageS3Version| String     | If the bucket is versioning enabled, you can specify the object version.

## AWSRekognition.indexFacesIntoCollection
Detects faces in the input image and adds them to the specified collection.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| API key obtained from Amazon
| apiSecret          | credentials| API secret obtained from Amazon
| region             | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| collectionId       | String     | ID of an existing collection to which you want to add the faces that are detected in the input images.
| externalImageId    | String     | ID you want to assign to all the faces detected in the image.
| detectionAttributes| JSON       | JSON Array of Strings. Returns detailed attributes of indexed faces. By default, the operation returns a subset of the facial attributes.
| image              | File       | File or url

## AWSRekognition.indexS3FacesIntoCollection
Detects faces in the input image and adds them to the specified collection.

| Field              | Type       | Description
|--------------------|------------|----------
| apiKey             | credentials| API key obtained from Amazon
| apiSecret          | credentials| API secret obtained from Amazon
| region             | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| collectionId       | String     | ID of an existing collection to which you want to add the faces that are detected in the input images.
| externalImageId    | String     | ID you want to assign to all the faces detected in the image.
| detectionAttributes| JSON       | JSON Array of Strings. Returns detailed attributes of indexed faces. By default, the operation returns a subset of the facial attributes.
| imageS3Bucket      | String     | Name of the S3 bucket.
| imageS3Name        | String     | S3 object key name.
| imageS3Version     | String     | If the bucket is versioning enabled, you can specify the object version.

## AWSRekognition.getCollections
Returns list of collection IDs in your account. If the result is truncated, the response also provides a NextToken that you can use in the subsequent request to fetch the next set of collection IDs.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| API key obtained from Amazon
| apiSecret | credentials| API secret obtained from Amazon
| region    | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| maxResults| String     | Maximum number of collection IDs to return.
| nextToken | String     | Pagination token from the previous response.

## AWSRekognition.getFacesInCollection
Returns metadata for faces in the specified collection. This metadata includes information such as the bounding box coordinates, the confidence (that the bounding box contains a face), and face ID.

| Field           | Type       | Description
|-----------------|------------|----------
| apiKey          | credentials| API key obtained from Amazon
| apiSecret       | credentials| API secret obtained from Amazon
| region          | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| collectionId    | String     | ID of the collection from which to list the faces.
| maxResults      | String     | Maximum number of faces to return.
| nextToken       | String     | If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of faces.

## AWSRekognition.searchFaces
For a given input face ID, searches the specified collection for matching faces. You get a face ID when you add a face to the collection using the IndexFaces operation. The operation compares the features of the input face with faces in the specified collection.

| Field             | Type       | Description
|-------------------|------------|----------
| apiKey            | credentials| API key obtained from Amazon
| apiSecret         | credentials| API secret obtained from Amazon
| region            | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| collectionId      | String     | ID of the collection to search.
| faceId            | String     | ID of a face to find matches for in the collection.
| faceMatchThreshold| String     | Optional value specifying the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%.
| maxFaces          | String     | Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.

## AWSRekognition.searchFacesByImage
For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection.

| Field             | Type       | Description
|-------------------|------------|----------
| apiKey            | credentials| API key obtained from Amazon
| apiSecret         | credentials| API secret obtained from Amazon
| region            | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| faceMatchThreshold| String     | Specifies the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%.
| maxFaces          | Number     | Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.
| collectionId      | String     | ID of the collection to search.
| image             | File       | File or url

## AWSRekognition.searchFacesByS3Image
For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection.

| Field             | Type       | Description
|-------------------|------------|----------
| apiKey            | credentials| API key obtained from Amazon
| apiSecret         | credentials| API secret obtained from Amazon
| region            | String     | AWS Region. Supported values: `us-east-1` (N. Virginia) and `us-west-2` (Oregon)
| faceMatchThreshold| String     | Specifies the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%.
| maxFaces          | Number     | Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.
| collectionId      | String     | ID of the collection to search.
| imageS3Bucket     | String     | Name of the S3 bucket.
| imageS3Name       | String     | S3 object key name.
| imageS3Version    | String     | If the bucket is versioning enabled, you can specify the object version.

