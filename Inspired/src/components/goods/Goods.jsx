import { useSelector } from 'react-redux';
import { Container } from '../layout/container/Container.jsx';
import { Product } from '../product/Product.jsx';
import s from './Goods.module.scss';
import { Pagination } from '../pagination/Pagination.jsx';

export const Goods = ({ title }) => {
	const { goodsList } = useSelector(state => state.goods);

	return (
		<section className={s.goods}>
			<Container>
				<h2 className={s.title}>{title ?? 'Новинки'}</h2>
				<ul className={s.list}>
					{goodsList.map(item => (
						<li key={item.id}>
							<Product {...item} />
						</li>
					))}
				</ul>
				<Pagination />
			</Container>
		</section>
	);
};
