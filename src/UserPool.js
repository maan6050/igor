import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_oNG1T2uXF',
  ClientId: '70rdj3o7135a0had4f497jfhhd'
};

export default new CognitoUserPool(poolData);