import { useParams } from 'react-router-dom';
import { Container } from '../layout/container/Container';

export const MainPage = ({ gender = 'women' }) => {
	const { category } = useParams();

	return (
		<Container>
			<div>MainPage{gender}</div>
			{category && <p>Категория: {category}</p>}
		</Container>
	);
};
