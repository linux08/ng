import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import NodeGuardianLogo from '@assets/node-guardian.svg';
import { NavStyles } from '../../styles/HeaderStyles';

export const Header = () => {
	const router = useRouter();
	return (
		<NavStyles>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>
			<div data-testid='header' onClick={() => router.push('/')}>
				<Image data-testid='headerlogo' src={NodeGuardianLogo} width={285} height={35} alt='Node Guardian Image' />
			</div>
		</NavStyles>
	);
};
