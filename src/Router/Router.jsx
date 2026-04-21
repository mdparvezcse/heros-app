import React from 'react';
import { createBrowserRouter } from 'react-router';
import Roots from '../Roots/Roots';

import Home from '../Pages/Home/Home';
import Allapp from '../Pages/Allapp/Allapp';
import Instullation from '../Pages/Instullation/Instullation';
import Error from '../Pages/Error/Error';


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
      { path: '/apps', Component: Allapp },
      { path: '/instullation', Component: Instullation },
      { path: '*', Component: Error }

    ]
  }
])

export default router;