#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkHelloWorldStack } from "../lib/cdk-hello-world-stack";
 require("dotenv").config();

console.log(process.env.CDK_DEFAULT_ACCOUNT, "process.env.CDK_DEFAULT_ACCOUNT");
console.log(process.env.CDK_DEFAULT_REGION, "process.env.CDK_DEFAULT_ACCOUNT");

const app = new cdk.App();
new CdkHelloWorldStack(app, "CdkHelloWorldStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
