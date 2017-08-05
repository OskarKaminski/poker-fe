import Relay from 'react-relay/classic';

export default class extends Relay.Route {
    static queries = {
        store: (Component) => Relay.QL`
          query {
            store { ${Component.getFragment('store')} }
          }
        `,
    };
    static routeName = 'AppHomeRoute';
}
