import * as dynamoDBLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

export async function main (event, context, callback) {
  const params = {
    TableName: 'notes',
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDBLib.call('get', params);
    if (result.Item) {
      return success(result.Item);
    }

    return failure({ status: false, error: 'Item not found.' });
  } catch (e) {
    console.error(e);
    return failure({ status: false });
  }
}
