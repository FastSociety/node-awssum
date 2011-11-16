// --------------------------------------------------------------------------------------------------------------------
//
// sns.js - test for AWS Simple Notification Service
//
// Copyright (c) 2011 AppsAttic Ltd - http://www.appsattic.com/
// Written by Andrew Chilton <chilts@appsattic.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------
// requires

var tap = require("tap"),
    test = tap.test,
    plan = tap.plan,
    _ = require('underscore');
var amazon;
var snsService;

// --------------------------------------------------------------------------------------------------------------------
// basic tests

test("load sns", function (t) {
    snsService = require("../lib/amazon/sns");
    t.ok(snsService, "object loaded");

    amazon = require("../lib/amazon/amazon");
    t.ok(amazon, "object loaded");

    t.end();
});

test("create sns object", function (t) {
    var sns = new snsService.Sns('access_key_id', 'secret_access_key', 'aws_account_id', amazon.US_WEST_1);

    t.equal('access_key_id', sns.accessKeyId(), 'Access Key ID set properly');
    t.equal('secret_access_key', sns.secretAccessKey(), 'Secret Access Key set properly');
    t.equal('aws_account_id', sns.awsAccountId(), 'AWS Account ID set properly');
    t.equal('California', sns.region(), 'Region is set properly');

    t.end();
});

test("test all endpoints", function (t) {
    var sns1 = new snsService.Sns('access_key_id', 'secret_access_key', 'aws_account_id', amazon.US_EAST_1);
    var sns2 = new snsService.Sns('access_key_id', 'secret_access_key', 'aws_account_id', amazon.US_WEST_1);
    var sns3 = new snsService.Sns('access_key_id', 'secret_access_key', 'aws_account_id', amazon.EU_WEST_1);
    var sns4 = new snsService.Sns('access_key_id', 'secret_access_key', 'aws_account_id', amazon.AP_SOUTHEAST_1);
    var sns5 = new snsService.Sns('access_key_id', 'secret_access_key', 'aws_account_id', amazon.AP_NORTHEAST_1);

    t.equal('sns.us-east-1.amazonaws.com', sns1.host(), '1) Endpoint is correct');
    t.equal('sns.us-west-1.amazonaws.com', sns2.host(), '2) Endpoint is correct');
    t.equal('sns.eu-west-1.amazonaws.com', sns3.host(), '3) Endpoint is correct');
    t.equal('sns.ap-southeast-1.amazonaws.com', sns4.host(), '4) Endpoint is correct');
    t.equal('sns.ap-northeast-1.amazonaws.com', sns5.host(), '5) Endpoint is correct');

    t.end();
});

// --------------------------------------------------------------------------------------------------------------------
