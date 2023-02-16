import {v4 as uuid} from 'uuid';
import { TestCollection } from './TestCollection.js';
import { TestCard } from './TestCard.js';
import { TestState } from './TestCard.js';

export class MockDatabase {
    public testCollections: TestCollection[];

    /**
     * @param testCollections The mock database keeps track of the collections here
     */
    constructor() {
        this.testCollections = new Array<TestCollection>();
    }

	public async startGame(): Promise<string> {
		const TestCollection = await this.generateCollection();
		this.testCollections.push(TestCollection);
		return TestCollection.gameId;
	}

	public async drawTestCard(gameID: string): Promise<TestCard> {
		const TestCollection = this.testCollections.find(TestCollection => TestCollection.gameId === gameID);
		return this.drawFromPack(TestCollection);
	}

	private async drawFromPack(TestCollection: TestCollection): Promise<TestCard> {
		const choosenTestCard = TestCollection.cardSet.find(TestCard => TestCard.state === TestState.Ready);
		choosenTestCard.state = TestState.Started;
		return choosenTestCard;
	}

	private async generateCollection(): Promise<TestCollection> {
		const cardList: TestCard[] = await this.generateCards();
		const gameId: string = uuid();
		const testCollection = new TestCollection(gameId, cardList);
		return testCollection;
	}

	private async generateCards() {
		const cardsList = new Array<TestCard>();
		cardsList.push({name: 'test01', script: './src/TestFiles/test01.spec.ts', state: TestState.Ready});
		cardsList.push({name: 'test02', script: './src/TestFiles/test02.spec.ts', state: TestState.Ready});
		cardsList.push({name: 'test03', script: './src/TestFiles/test03.spec.ts', state: TestState.Ready});
		cardsList.push({name: 'test04', script: './src/TestFiles/test04.spec.ts', state: TestState.Ready});
		cardsList.push({name: 'test05', script: './src/TestFiles/test05.spec.ts', state: TestState.Ready});
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