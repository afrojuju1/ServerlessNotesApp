import uuid from 'uuid';
import * as dynamoDBLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

export async function main (event, context, callback) {
  const data = JSON.parse(event.body); //event.body is a JSON string

  const params = {
    TableName: 'notes',
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  // console.info('params: ', params);
  try {
    await dynamoDBLib.call('put', params);
    return success(params.Item);
  } catch (e) {
    console.error(e);
    return failure({ status: false });
  }
}
