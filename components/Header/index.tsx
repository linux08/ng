import Image from 'next/image';
import * as React from 'react';
import NodeGuardianLogo from '@assets/node-guardian.svg';
import { NavStyles } from './HeaderStyles';

export const Header = () => {
	return (
		<NavStyles>
			<Image src={NodeGuardianLogo} width={285} height={35} alt='Node Guardian Image' />
		</NavStyles>
	);
};
