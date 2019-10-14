import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import { CreateSignalRequest } from '../../requests/CreateSignalRequest'
import { CreateSignal } from '../../businessLogic/signal';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const newSignal: CreateSignalRequest = JSON.parse(event.body);
  const newItem = await CreateSignal(newSignal);

  // TODO: Implement creating a new TODO item
  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      newItem
    })
  };
}
