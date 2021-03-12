// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
require('dotenv').config()

var aws = require("aws-sdk");
var ses = new aws.SES({ region: "ap-northeast-1" });

exports.handler = async function (event) {
  var params = {
    Destination: {
      ToAddresses: [process.env.ToAddresses],
    },
    Message: {
      Body: {
        Text: { Data: "Test" },
      },
      Subject: { Data: "Test Email" },
    },
    Source: process.env.SourceEmailAddress,
  };

  return ses.sendEmail(params).promise()
};
