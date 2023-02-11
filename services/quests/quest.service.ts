import axiosInstance from '@services/axios';
import { GET_QUESTS, GET_QUEST_DATA } from './quest.endpoint';

const getAllQuests = async () => {
	return await axiosInstance.get(GET_QUESTS);
};

const getQuestData = async (questId: number) => {
	return await axiosInstance.get(`${GET_QUEST_DATA}/${questId}`);
};

export { getAllQuests, getQuestData };
