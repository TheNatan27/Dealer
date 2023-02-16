import { TestCard } from "./TestCard.js";
import { TestState } from "./TestCard.js";

export class TestCollection {
    public gameId: string;
    public cardSet: TestCard[];

    /**
     * 
     * @param gameID A randomly generated id, uniwue to each game
     * @param Cardset An array of test the contained in the collection
     */
    constructor(gameID: string, Cardset: TestCard[]) {
        this.gameId = gameID;
        this.cardSet = Cardset;
    }

}