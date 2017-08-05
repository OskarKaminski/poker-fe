import {Environment, RecordSource, Store} from 'relay-runtime';
import {network} from './relay-network';

const source = new RecordSource();
const store = new Store(source);

export const environment = new Environment({
    network,
    store,
});