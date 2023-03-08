import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import { App } from './Components/index.js';
import { AuthProvider } from './Providers/AuthProvider';
//get that element from html where comp reneder karana hai
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* use it here so all data relate to auth can provide to all components,they can use to do things/check/data server authorize token  */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

//web pack ke help se all module js combine single module,and all css single css
//web pack,bundler react js provide to us and use it own it own(automatically)
