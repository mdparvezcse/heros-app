import React from 'react';
import { createBrowserRouter } from 'react-router';
import Roots from '../Roots/Roots';

import Home from '../Pages/Home/Home';
import Allapp from '../Pages/Allapp/Allapp';
import Instullation from '../Pages/Instullation/Instullation';
import Error from '../Pages/Error/Error';

const router = createBrowserRouter([
  {path: '/',
    Component: Roots,
    errorElement: <Error></Error>,
    children:[
      {index: true, Component: Home},
      {path: '/apps', Component: Allapp},
      {path: '/instullation', Component: Instullation}
    ]
  }
])

export default router;