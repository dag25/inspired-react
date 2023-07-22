import { useRouteError } from 'react-router-dom';
export const ErrorPage = () => {
	const error = useRouteError(ErrorPage);
	return (
		<div>
			<h2>Mistake 404</h2>
			<p>{error?.message || 'Неизвестная ошибка'}</p>
		</div>
	);
};
