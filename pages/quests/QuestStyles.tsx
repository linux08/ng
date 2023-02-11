import styled from 'styled-components';

export const MWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Content = styled.div`
	position: relative;
	width: 755px;
	height: 635px;
	background: #1d1c1a;
	border: 1px solid rgba(58, 58, 58, 0.5);
	border-radius: 10px;
	padding: 5px;
	@media (max-width: 768px) {
		width: 100%;
	}
`;
export const CloseIconWrapper = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
	cursor: pointer;
`;
export const BodyHeader = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
	justify-content: center;
	& h1 {
		font-family: 'Cinzel', serif;
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 27px;
		color: #ffffff;
		display: flex;
		justify-content: center;
		margin: 0 20px;
	}
`;
export const BodySkills = styled.div`
	display: flex;
	width: 100%;
	margin: 12px 0;
	padding: 0 5px;
	@media (max-width: 400px) {
		display: block;
	}
`;
export const FirstSkills = styled.div`
	width: 100%;
	& div:nth-of-type(1) {
		display: flex;
		margin-bottom: 10px;
	}
	& div:nth-of-type(2) {
		display: flex;
	}
`;
export const SecondSkills = styled.div`
	width: 100%;
	& div:nth-of-type(1) {
		display: flex;
	}
	& div:nth-of-type(2) {
		display: flex;
		margin-top: 8px;
	}
`;
export const BodyDesc = styled.div`
	& p {
		font-family: 'Lato', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: #8e8e8e;
		padding: 0 5px;
	}
`;
export const Footer = styled.div`
	position: absolute;
	bottom: 0;
	left: 15px;
	right: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	& div {
		position: relative;
	}
	& h1 {
		font-family: 'Cinzel', serif;
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		line-height: 19px;
		color: #ffffff;
		margin-bottom: 7px;
	}
	& a {
		text-decoration: none;
		font-family: 'Cinzel', serif;
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		line-height: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		text-transform: capitalize;
		color: #ffffff;
		background: #1d1c1a;
		border: 0.6px solid #bea77e;
		border-radius: 2.5px;
		width: 93px;
		height: 35px;
	}
	& p {
		position: absolute;
		bottom: 20px;
		left: 15px;
		font-family: 'Cinzel', serif;
		font-style: normal;
		font-weight: 700;
		font-size: 8px;
		line-height: 11px;
		text-align: right;
		color: #ffffff;
	}
`;
