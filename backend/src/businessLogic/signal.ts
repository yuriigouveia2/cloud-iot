import * as uuid from 'uuid';
import { SignalAccess } from '../dataLayer/signalAccess';
import { SignalItem } from '../models/SignalItem';
import { CreateSignalRequest } from '../requests/CreateSignalRequest';

const groupAccess = new SignalAccess();

export async function CreateSignal(
    createSignalRequest: CreateSignalRequest
): Promise<SignalItem> {

    const itemId = uuid.v4();

    return await groupAccess.CreateSignal({
        signalId: itemId,
        signal: createSignalRequest.signal,
        createdAt: new Date().toISOString(),
        
    });
}

export async function GetAllSignals(): Promise<SignalItem[]> {
    return groupAccess.GetAllSignals();
}