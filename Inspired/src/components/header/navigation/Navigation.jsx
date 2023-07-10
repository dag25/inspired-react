import { Category } from './category';
import { Gender } from './gender';
export const Navigation = () => (
	<nav>
		<div className='container'>
			<Gender />
			<Category />
		</div>
	</nav>
);
