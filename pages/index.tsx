import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Header } from '@/components/Header';
import { QuestCardComp } from '@/components/QuestCard';
import { MainQuestGridStyles } from '@/styles/HomePageStyles';
import { getAllQuests } from '@/services/quests/quest.service';
import { IQuests } from '@/interfaces/quests.interface';
import { useQuery } from '@tanstack/react-query';

const Home: React.FC<IQuests> = ({ quests }) => {
	const { data, status } = useQuery({
		queryKey: ['quests'],
		queryFn: getAllQuests,
		initialData: quests
	});

	if (status === 'error') {
		return <div>Error fetching data</div>;
	}

	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<Header />

			<MainQuestGridStyles>
				<QuestCardComp quests={data} />
			</MainQuestGridStyles>
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const res = await getAllQuests();
	const quests = res.data;

	return {
		props: {
			quests
		}
	};
};
