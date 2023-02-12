import { GetStaticProps } from 'next';
import { Header } from '@/components/Header';
import { QuestCardComp } from '@/components/QuestCard';
import { MainQuestGridStyles } from '@/styles/HomePageStyles';
import { getAllQuests } from '../lib/load-quest';
import { IQuests } from '../interfaces/quest.interface';
import { useQuery } from '@tanstack/react-query';

const Home: React.FC<IQuests> = ({ quests }) => {
	const { data, status } = useQuery({
		queryKey: ['quests'],
		queryFn: getAllQuests,
		initialData: quests
	});

	if (status === 'error') {
		return <div data-testid='error-message'>Error fetching data</div>;
	}

	return (
		<>
			<Header />
			<MainQuestGridStyles>
				<QuestCardComp quests={data || []} />
			</MainQuestGridStyles>
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const quests = await getAllQuests();

	return {
		props: {
			quests
		}
	};
};
