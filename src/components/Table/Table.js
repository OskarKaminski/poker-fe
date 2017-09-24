import './Table.scss';
import React from 'react'
import {
    graphql,
    createFragmentContainer
} from 'react-relay';
import {Seat} from './Seat/Seat';

const Table = ({table}) => (
        <div className="game-table game-table--seats-5">
            <p>{table.name}</p>
            <p>{table.stake}</p>
            {
                table.players.map((player) => (
                    <Seat
                        nickname={player.profile.nickname}
                        avatar={player.profile.imgUrl}
                        chips={player.chips}
                        key={player.id}
                    />
                ))
            }
        </div>
);

export default createFragmentContainer(
    Table,
    graphql`
        fragment Table_table on Table {
            name
            stake
            players{
                id
                profile{
                    nickname
                    imgUrl
                }
                chips
            }
        }
    `
)