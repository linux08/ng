export interface QuestProps {
	cover: string;
	difficulty: number;
	description: string;
	experience: number;
	gold: number;
	id: number;
	skill: string;
	skillTree: string;
	title: string;
	type: string;
}

export interface IQuests {
	quests: QuestProps[] | any;
}
