import { v4 as uuid } from 'uuid';
import { TestCollection } from './TestCollection.js';
import { TestState } from './TestCard.js';
export class MockDatabase {
    /**
     * @param testCollections The mock database keeps track of the collections here
     */
    constructor() {
        this.testCollections = new Array();
    }
    async startGame() {
        const TestCollection = await this.generateCollection();
        this.testCollections.push(TestCollection);
        return TestCollection.gameId;
    }
    async drawTestCard(gameID) {
        const TestCollection = this.testCollections.find(TestCollection => TestCollection.gameId === gameID);
        return this.drawFromPack(TestCollection);
    }
    async drawFromPack(TestCollection) {
        const choosenTestCard = TestCollection.cardSet.find(TestCard => TestCard.state === TestState.Ready);
        choosenTestCard.state = TestState.Started;
        return choosenTestCard;
    }
    async generateCollection() {
        const cardList = await this.generateCards();
        const gameId = uuid();
        const testCollection = new TestCollection(gameId, cardList);
        return testCollection;
    }
    async generateCards() {
        const cardsList = new Array();
        cardsList.push({ name: 'test01', script: './src/TestFiles/test01.spec.ts', state: TestState.Ready });
        cardsList.push({ name: 'test02', script: './src/TestFiles/test02.spec.ts', state: TestState.Ready });
        cardsList.push({ name: 'test03', script: './src/TestFiles/test03.spec.ts', state: TestState.Ready });
        cardsList.push({ name: 'test04', script: './src/TestFiles/test04.spec.ts', state: TestState.Ready });
        cardsList.push({ name: 'test05', script: './src/TestFiles/test05.spec.ts', state: TestState.Ready });
        return cardsList;
    }
}
/**
 * Drawing mechanism
 * Choose the right game by gameId, then the game should handle
 * the test selection
 *
 * StartGame
 * startGame() -> generateCollection() -> generateCards()
 * returns game id, pushes game <- combines gameId and cards <- generates cards
 */ 
//# sourceMappingURL=MockDatabase.js.map