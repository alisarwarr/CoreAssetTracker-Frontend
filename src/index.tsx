//REACT
import ReactDOM from 'react-dom/client';
//REACT-ROUTER-DOM
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
//STYLES
import './styles/index.css';


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <RouterProvider router={router} />
);