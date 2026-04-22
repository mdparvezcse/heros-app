import React from 'react';
import { createBrowserRouter } from 'react-router';
import Roots from '../Roots/Roots';

import Home from '../Pages/Home/Home';
import Allapp from '../Pages/Allapp/Allapp';
import Instullation from '../Pages/Instullation/Instullation';
import Error from '../Pages/Error/Error';
import AppDetails from '../Pages/Allapp/Apps/AppDetails';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Roots,

    children: [
      {
        index: true,
        loader: () => fetch('trending.json'),
        Component: Home
      },
      {
        path: '/apps',
        loader: () => fetch('allAppsData.json'),
        Component: Allapp
      },
      { 
        path: '/instullation',
        // loader: () => fetch('allAppsData.json'),
        Component: Instullation 
      },
      
      { path: '*', Component: Error },
      {
        path: '/appDetails/:id',
        loader: () => fetch('allAppsData.json'),
        Component: AppDetails
      }

    ]
  }
])

export default router;