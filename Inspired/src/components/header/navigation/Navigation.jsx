import { useDispatch } from 'react-redux';
import { Container } from '../../layout/container/Container.jsx';
import { Category } from './category/Category.jsx';
import { Gender } from './gender/Gender.jsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setActiveGender } from '../../../features/navigationSlice.js';

export const Navigation = ({ list }) => {
	const dispath = useDispatch();
	const location = useLocation();
	const gender = location.pathname.split('/')[1] || 'women';

	useEffect(() => {
		dispath(setActiveGender(gender));
	}, [gender, dispath]);
	return (
		<nav>
			<Container>
				<Gender list={list} />
				<Category list={list} />
			</Container>
		</nav>
	);
};
