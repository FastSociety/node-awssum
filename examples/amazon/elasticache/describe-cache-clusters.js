var inspect = require('eyes').inspector();
var awssum = require('awssum');
var amazon = awssum.load('amazon/amazon');
var ElastiCache = awssum.load('amazon/elasticache').ElastiCache;

var env = process.env;
var accessKeyId = process.env.ACCESS_KEY_ID;
var secretAccessKey = process.env.SECRET_ACCESS_KEY;
var awsAccountId = process.env.AWS_ACCOUNT_ID;

var elastiCache = new ElastiCache({
    'accessKeyId'     : accessKeyId,
    'secretAccessKey' : secretAccessKey,
    // 'awsAccountId'    : awsAccountId, // optional
    'region'          : amazon.US_EAST_1
});

console.log( 'Region :', elastiCache.region() );
console.log( 'EndPoint :',  elastiCache.host() );
console.log( 'AccessKeyId :', elastiCache.accessKeyId() );
console.log( 'SecretAccessKey :', elastiCache.secretAccessKey().substr(0, 3) + '...' );
console.log( 'AwsAccountId :', elastiCache.awsAccountId() );

elastiCache.DescribeCacheClusters(function(err, data) {
    console.log("\ndescribing cache clusters - expecting success");
    inspect(err, 'Error');
    inspect(data, 'Data');
});