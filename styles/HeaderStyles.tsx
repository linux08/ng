import styled from 'styled-components';
import { darkTheme } from './theme';

export const NavStyles = styled.nav`
	position: fixed;
	padding: 20px;
	background-color: ${darkTheme.colors.black};
	width: 100%;
	top: 0;
	z-index: 50;
`;
