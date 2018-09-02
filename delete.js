/*
 * Copyright 2013. Amazon Web Services, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
**/

// Load the SDK
let AWS = require('aws-sdk');

// Create an S3 client
let s3 = new AWS.S3();

let bucketName = 'defineBucketName';
let keyName1 = 'test/hello_world1.txt';
let keyName2 = 'test/hello_world2.txt';

let params = {
	Bucket: bucketName,
	Delete: {
                Objects: [
					{
						Key: keyName1,
					},
					{
						Key: keyName2,
					},
				],
                Quiet: false,
            },

};
s3.deleteObjects(params, function(err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log('Successfully deleted ' + bucketName + '/' + keyName1 + '-' + keyName2);
	}
});
