import { Container } from '../layout/container/Container';
import { Navigation } from './navigation/Navigation';
import { Top } from './top/Top';

export const Header = ({ list }) => (
	<header>
		<Container>
			<Top />
			<Navigation list={list} />
		</Container>
	</header>
);
