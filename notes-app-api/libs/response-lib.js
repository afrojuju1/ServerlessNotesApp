export function success (body) {
  return buildResponse(200, body);
}

export function failure (body) {
  return buildResponse(500, body);
}

export function buildResponse (statusCode, body) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  };

  return {
    statusCode: statusCode,
    headers: headers,
    body: JSON.stringify(body)
  };
}
