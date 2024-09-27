 # CDK Hello World Application

This is a simple AWS CDK application that creates an API Gateway connected to a Lambda function. The Lambda function returns a "Hello World" message when invoked through the API.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/work-with-cdk-typescript.html) (version 2.x)
- [AWS CLI](https://aws.amazon.com/cli/) configured with your AWS credentials

### Lambda Function

The Lambda function is located in the `lambda/` directory, and the handler file is named `hello.js`.

### CDK Stack

The main CDK stack is defined in `cdk-hello-world-stack.ts`, where the Lambda function and API Gateway are created.

## Installation

 #### 1. Clone the repository:

   ```bash
   git clone https://your-repo-url.git
   cd cdk-hello-world
   ```

  #### 2. Install the necessary dependencies:

   ```bash
   npm install
   ```
  #### 3. Deploying the Stack:

   ```bash
   npm run deploy
   ```

## Testing the API


Once the deployment is complete, you will see the API Gateway endpoint in the output. You can test the API by running:

 ```bash
   curl https://your-api-endpoint/hello
   ```

   You should receive a response similar to:

```bash
   {"message": "Hello World!"}
   ```


## Cleanup
To remove the stack and all associated resources, run:

```bash
npm run destroy 
   ```



   # AWS-Cdk_HelloWorld_Lambda_Gateway_Stack
# AWS-Cdk_HelloWorld_Lambda_Gateway_Stack
# AWS-Cdk_HelloWorld_Lambda_Gateway_Stack
# AWS-Cdk_HelloWorld_Lambda_Gateway_Stack
