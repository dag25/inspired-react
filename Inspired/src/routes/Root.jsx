import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header.jsx';
import { Main } from '../components/layout/main/Main.jsx';
import { Footer } from '../components/footer/Footer.jsx';

export const Root = () => (
	<>
		<Header />
		<Main>
			<Outlet />
		</Main>
		<Footer />
	</>
);
