import {GameService} from './game.service';
import mocks from '../combination/combination.mock.json';

describe('Game service', () => {

    const gameService = new GameService();

    describe('PullOutPlayerCards method', () => {

        it(`returns 2 cards`, ()=> {
            expect(gameService.pullOutPlayerCards('Oskar').length).toBe(2);
        });

        it(`update user cards to users array`, ()=> {
            gameService.pullOutPlayerCards('Oskar');
            expect(gameService.players['Oskar'].length).toBe(2);
        });

    });

    describe('PullOutFlop method', () => {

        it(`returns 3 cards`, ()=> {
            expect(gameService.pullOutFlop().length).toBe(3);
        });

        it(`update flop cards`, ()=> {
            gameService.pullOutFlop();
            expect(gameService.flop.length).toBe(3);
        });

    });

    describe('PullOutTurn method', () => {

        it(`returns 1 card`, ()=> {
            expect(gameService.pullOutTurn().value).toBeDefined();
        });

        it(`update turn cards`, ()=> {
            gameService.pullOutTurn();
            expect(gameService.turn.value).toBeDefined();
        });

    });

    describe('PullOutRiver method', () => {

        it(`returns 1 card`, ()=> {
            expect(gameService.pullOutRiver().value).toBeDefined();
        });

        it(`update river cards`, ()=> {
            gameService.pullOutRiver();
            expect(gameService.river.value).toBeDefined();
        });

    });

    it(`has method gameResult`, ()=> {
        expect(gameService.gameResult).toBeDefined();
    });

    describe('GameResult method', () => {

        describe(`returns "Oskar won" when`, ()=> {

            it(`Oskar has two pairs and his opponent one pair`, ()=> {
                gameService.players = {
                    Oskar: mocks.twoPairs,
                    Opponent: mocks.onePair
                };

                expect(gameService.gameResult()).toBe('Oskar won');
            });

        });
        
        describe(`returns "Oskar lost" when`, ()=> {

            xit(`Oskar has one pair and his opponent two pairs`, ()=> {
                gameService.players = {
                    Oskar: mocks.onePair,
                    Opponent: mocks.twoPairs
                };

                expect(gameService.gameResult()).toBe('Opponent won');
            });

        });

    });

});