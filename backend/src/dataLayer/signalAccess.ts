import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { SignalItem } from "../models/SignalItem";
import * as AWS from "aws-sdk";
import { createLogger } from "../utils/logger";

export class SignalAccess {

    constructor(
        private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
        private readonly signalTable = process.env.SIGNAL_TABLE
    ) { }
    
    async CreateSignal(signal: SignalItem): Promise<SignalItem> {
        const logger = createLogger('create-signal');
        logger.info('Creating a signal item ', {...signal});

        await this.docClient.put({
            TableName: this.signalTable,
            Item: signal
        }).promise();

        return signal;
    }

    async GetAllSignals(): Promise<SignalItem[]> {
        const logger = createLogger('get-signals');
        logger.info('Getting all signal items ');

        const result = await this.docClient.scan({
            TableName: this.signalTable
        }).promise();

        const items = result.Items;

        return items as SignalItem[];
    }
}