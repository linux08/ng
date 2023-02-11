import styled from 'styled-components';
export const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	grid-gap: 10px;
	@media (min-width: 640px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
`;
export const QuestCard = styled.div`
	position: relative;
	border: 1px solid blue;
	width: 100%;
	height: 100%;
	background: #1d1c1a;
	border: 1px solid rgba(58, 58, 58, 0.5);
	border-radius: 10px;
	padding: 5px;
	&:hover {
		cursor: pointer;
	}
	& h1 {
		font-family: 'Cinzel', serif;
		font-weight: 700;
		font-size: 14px;
		line-height: 19px;
		text-transform: capitalize !important;
		color: #ffffff;
		padding-top: 5px;
	}
`;
export const QuestPropertiesContainer = styled.div`
	margin-top: 5px;
	display: flex;
	justify-content: space-between;
	padding: 3px;
`;
export const QuestProperties = styled.div`
	width: 40%;
`;
export const QuestPropertyFlex = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 10px;
`;
export const QuestProperty = styled.p`
	width: '100%';
	font-family: 'Lato', sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: '14px';
	line-height: '17px';
	color: #bea77e;
	display: flex;
	align-items: flex-start;
	margin-right: 10px;
`;
export const QuestSkill = styled.p`
	width: 100%;
	font-family: 'Lato', sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	color: #98a7f5;
	text-align: left;
`;
export const QuestValue = styled.p`
	width: 100%;
	font-family: 'Lato', sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: '14px';
	line-height: 14px;
	color: #ffffff;
	text-align: left;
`;
export const DifficultyLevel = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;
