import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { useRouter } from 'next/router';
import {
	CloseIconWrapper,
	FirstSkills,
	BodyDesc,
	BodyHeader,
	BodySkills,
	Content,
	Footer,
	Wrapper,
	SecondSkills,
	MWrapper
} from './QuestStyles';
import { MainQuestGridStyles } from '@/styles/HomePageStyles';
import { QuestProps } from '@/interfaces/quests.interface';
import RewardImage from '@assets/quest-reward-exp.svg';
import { CloseIcon } from '@/assets/CloseIcon';
import { AlignLeftIcon } from '@/assets/AlignLeftIcon';
import { AlignRightIcon } from '@/assets/AlignRightIcon';
import { DifficultyLevel, QuestProperty, QuestValue } from '@components/QuestCard/QuestCardStyles';
import SwordActive from '@/assets/SwordActive';
import SwordInActive from '@/assets/SwordInActive';
import { getAllQuests, getQuestData } from '@/services/quests/quest.service';
import { useQuery } from '@tanstack/react-query';

export async function getStaticPaths() {
	const res = await getAllQuests();
	const questData = await res.data;
	const paths = questData.map((quest) => {
		return {
			params: {
				id: `${quest.id}`
			}
		};
	});
	return {
		paths,
		fallback: false
	};
}

export default function ({ questData }) {
	let data = questData;
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<Header />

			<MWrapper>
				<Content>
					<Image
						src={data?.cover}
						width={740}
						height={270}
						alt={data?.title}
						style={{ objectFit: 'cover', minWidth: '100%', borderRadius: '8px 8px 0px 0px' }}
					/>
					<CloseIconWrapper onClick={() => router.back()}>
						<CloseIcon />
					</CloseIconWrapper>
					<BodyHeader>
						<AlignLeftIcon />
						<h1>{data?.title}</h1>
						<AlignRightIcon />
					</BodyHeader>
					<BodySkills>
						<FirstSkills>
							<div>
								<QuestProperty>Skill tree</QuestProperty>
								<QuestValue>{data?.skillTree}</QuestValue>
							</div>
							<div>
								<QuestProperty>Skill</QuestProperty>
								<QuestValue>{data?.skill}</QuestValue>
							</div>
						</FirstSkills>
						<SecondSkills>
							<div>
								<QuestProperty>Difficulty</QuestProperty>
								{data?.difficulty === 1 ? (
									<DifficultyLevel>
										{[1, 2, 3, 4, 5].map((c, n) => (
											<SwordActive key={n} />
										))}
									</DifficultyLevel>
								) : data?.difficulty === 2 ? (
									<DifficultyLevel>
										{[1, 2, 3, 4, 5].map((c, n) => (
											<SwordActive key={n} />
										))}
									</DifficultyLevel>
								) : data?.difficulty === 3 ? (
									<DifficultyLevel>
										{[1, 2, 3, 4, 5].map((c, n) => (
											<SwordActive key={n} />
										))}
									</DifficultyLevel>
								) : data?.difficulty === 4 ? (
									<DifficultyLevel>
										{[1, 2, 3, 4, 5].map((c, n) => (
											<SwordActive key={n} />
										))}
									</DifficultyLevel>
								) : (
									<DifficultyLevel>
										{[1, 2, 3, 4, 5].map((c, n) => (
											<SwordActive key={n} />
										))}
									</DifficultyLevel>
								)}
							</div>
							<div>
								<QuestProperty>Quest type</QuestProperty>
								<QuestValue>{data?.type}</QuestValue>
							</div>
						</SecondSkills>
					</BodySkills>
					<BodyDesc>
						<p>{data?.description}</p>
					</BodyDesc>
					<Footer>
						<div>
							<h1>QUEST REWARDS</h1>
							<Image src={RewardImage} alt='Node Guardian Image' style={{ objectFit: 'cover' }} />
							<p>+{data?.rewards?.experience}</p>
						</div>
						<a href='#' onClick={() => router.back()}>
							Go Back
						</a>
					</Footer>
				</Content>
			</MWrapper>
		</div>
	);
}

export const getStaticProps = async ({ id }) => {
	console.log('idisids', id);
	const res = await getQuestData(1);
	const questData = await res.data;
	return { props: { questData } };
};
