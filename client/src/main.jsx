import CssBaseline from '@mui/material/CssBaseline';
import {SnackbarProvider} from 'notistack';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import {PersistGate} from "redux-persist/integration/react";
import App from './App';
import {persist, store} from './app/store';
import {MuiTheme} from "./app/theme";
import ChatProvider from "./context/ChatProvider";
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <SnackbarProvider maxSnack={1}>
          <ChatProvider>
            <MuiTheme>
              <CssBaseline/>
              <Router><App/></Router>
            </MuiTheme>
          </ChatProvider>
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);