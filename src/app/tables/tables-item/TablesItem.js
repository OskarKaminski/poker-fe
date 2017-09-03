import React from 'react';
import {
    graphql,
    createFragmentContainer
} from 'react-relay';
import {TablesListItem} from 'Molecule/TablesListItem/TablesListItem';

const TablesItem = ({table}) => (
    <TablesListItem
        {...table}
    />
)

export default createFragmentContainer(
    TablesItem,
    graphql`
        fragment TablesItem_table on Table {
            name,
            stake
        }
    `
)