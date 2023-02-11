import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	Container,
	QuestCard,
	QuestPropertiesContainer,
	QuestProperties,
	QuestPropertyFlex,
	QuestProperty,
	QuestSkill,
	QuestValue,
	DifficultyLevel
} from './QuestCardStyles';
import SwordActive from '@/assets/SwordActive';
import SwordInActive from '@/assets/SwordInActive';
import { QuestProps } from '@/interfaces/quests.interface';

export const QuestCardComp: React.FC<any> = ({ quests }) => {
	const [show, setShow] = React.useState(false);
	const [questId, setQuestId] = React.useState(1);
	const truncate = (description: string) => {
		const newDescription = description.substring(0, 10);
		return `${newDescription}.`;
	};

	return (
		<Container>
			{quests &&
				quests?.map((quest: QuestProps, ind) => (
					<Link key={ind} href={`quests/${quest?.id}`}>
						<QuestCard>
							<Image
								src={quest?.cover}
								width={320}
								height={106}
								alt={quest?.title}
								style={{ objectFit: 'cover', minWidth: '100%', borderRadius: '7px' }}
							/>
							<h1>{quest?.title}</h1>
							<QuestPropertiesContainer>
								<QuestProperties>
									<QuestPropertyFlex>
										<QuestProperty>Skill tree</QuestProperty>
										<QuestSkill>{quest?.skillTree}</QuestSkill>
									</QuestPropertyFlex>
									<QuestPropertyFlex>
										<QuestProperty>Skill</QuestProperty>
										<QuestValue>{truncate(quest?.skill)}</QuestValue>
									</QuestPropertyFlex>
									<QuestPropertyFlex>
										<QuestProperty>Type</QuestProperty>
										<QuestValue>{quest?.type}</QuestValue>
									</QuestPropertyFlex>
								</QuestProperties>
								<QuestProperties>
									<QuestPropertyFlex>
										<QuestProperty>Difficulty</QuestProperty>
										{quest?.difficulty === 1 ? (
											<DifficultyLevel>
												<SwordActive />
												<SwordInActive />
												<SwordInActive />
												<SwordInActive />
												<SwordInActive />
											</DifficultyLevel>
										) : quest?.difficulty === 2 ? (
											<DifficultyLevel>
												<SwordActive />
												<SwordActive />
												<SwordInActive />
												<SwordInActive />
												<SwordInActive />
											</DifficultyLevel>
										) : quest?.difficulty === 3 ? (
											<DifficultyLevel>
												<SwordActive />
												<SwordActive />
												<SwordActive />
												<SwordInActive />
												<SwordInActive />
											</DifficultyLevel>
										) : quest?.difficulty === 4 ? (
											<DifficultyLevel>
												<SwordActive />
												<SwordActive />
												<SwordActive />
												<SwordActive />
												<SwordInActive />
											</DifficultyLevel>
										) : (
											<DifficultyLevel>
												<SwordActive />
												<SwordActive />
												<SwordActive />
												<SwordActive />
												<SwordActive />
											</DifficultyLevel>
										)}
									</QuestPropertyFlex>
									<QuestPropertyFlex>
										<QuestProperty>Experience</QuestProperty>
										<QuestValue>{quest?.experience}</QuestValue>
									</QuestPropertyFlex>
									<QuestPropertyFlex>
										<QuestProperty>Gold</QuestProperty>
										<QuestValue>{quest?.gold}</QuestValue>
									</QuestPropertyFlex>
								</QuestProperties>
							</QuestPropertiesContainer>
						</QuestCard>
					</Link>
				))}
		</Container>
	);
};
