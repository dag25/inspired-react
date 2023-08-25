import { Container } from '../layout/container/Container';
import { Navigation } from './navigation/Navigation';
import { Top } from './top/Top';
import s from './Header.module.scss';

export const Header = () => (
	<header className={s.header}>
		<Container>
			<Top />
			<Navigation />
		</Container>
	</header>
);
