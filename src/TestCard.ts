export type TestCard = {
    name: string;
	script: string;
	state: TestState;
	result?: string;
};

export enum TestState {
	Ready,
	Started,
	Done,
	NotRun
}