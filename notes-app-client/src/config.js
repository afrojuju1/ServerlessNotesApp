export default {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'serverless-note-app-uploads-bucket'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://ksmjgrj5o4.execute-api.us-east-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_DcSfYRgZs',
    APP_CLIENT_ID: '4sq16tdcpfjbo2uj9ahaf1fq1g',
    IDENTITY_POOL_ID: 'us-east-2:ae105a97-028b-4f6f-aa4e-688564f8cced'
  }
}
