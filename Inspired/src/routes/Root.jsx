import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header.jsx';
import { Main } from '../components/layout/main/Main.jsx';
import { Footer } from '../components/footer/Footer.jsx';

const list = [
	{
		link: 'women',
		title: 'Женщины',
		categories: [
			{ link: 'bras', title: 'Бюстгальтер' },
			{ link: 'panties', title: 'Трусы' },
			{ link: 'socks', title: 'Носки' },
			{ link: 'bathrobes', title: 'Халаты' },
			{ link: 'thermal', title: 'Термобелье' },
			{ link: 'pajamas', title: 'Пижамы' },
		],
	},
	{
		link: 'men',
		title: 'Мужчины',
		categories: [
			{ link: 'panties', title: 'Трусы' },
			{ link: 'socks', title: 'Носки' },
			{ link: 'bathrobes', title: 'Халаты' },
			{ link: 'thermal', title: 'Термобелье' },
		],
	},
];
export const Root = () => (
	<>
		<Header list={list} />
		<Main>
			<Outlet />
		</Main>
		<Footer list={list} />
	</>
);
