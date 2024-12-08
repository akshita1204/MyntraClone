import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Bag from './routes/Bag.jsx';
import Homes from './routes/Homes.jsx';
import {Provider} from 'react-redux';
import myntrastore from './store/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homes /> },
      {
        path: "/bag",
        element: <Bag/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntrastore}>
    <RouterProvider router={router}></RouterProvider>
      </Provider>
    
  </StrictMode>,
)
