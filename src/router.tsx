import { createBrowserRouter } from 'react-router-dom';
import ProjectDetails from './page/ProjectDetails';
import ProjectGallery from './page/ProjectGallery';

export const router = createBrowserRouter([
  {
    path: '/project/:projectName',
    element: <ProjectDetails />,
  },
  {
    path: '/project',
    element: <ProjectGallery />,
  },
]);
