import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import {network} from './relay-network';

const source = new RecordSource();
const store = new Store(source);

const environment = new Environment({
    network,
    store,
});