import { NuqsAdapter } from 'nuqs/adapters/react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
if (!root) {
	throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
	<NuqsAdapter>
		<App />
	</NuqsAdapter>,
);
