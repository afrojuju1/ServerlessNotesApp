import * as dynamoDBLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

export async function main (event, context, callback) {
  const params = {
    TableName: 'notes',
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': event.requestContext.identity.cognitoIdentityId
    }
  }

  try {
    const result = await dynamoDBLib.call('query', params);
    return success(result.Items);
  } catch (e) {
    console.error(e);
    return failure({ status: false });
  }
}
