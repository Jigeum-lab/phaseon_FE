import { createBrowserRouter } from 'react-router-dom';
import ProjectDetails from './page/ProjectDetails';
import Main from './page/Main';

export const router = createBrowserRouter([
  {
    path: '/:projectName',
    element: <ProjectDetails />,
  },
  {
    path: '/',
    element: <Main />,
  },
]);
