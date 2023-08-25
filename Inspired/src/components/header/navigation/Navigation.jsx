import { useDispatch } from 'react-redux';
import { Container } from '../../layout/container/Container.jsx';
import { Category } from './category/Category.jsx';
import { Gender } from './gender/Gender.jsx';

export const Navigation = () => (
	<nav>
		<Container>
			<Gender />
			<Category />
		</Container>
	</nav>
);
