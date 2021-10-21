import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { CombineProvider, customProvider } from './CombineProvider';
import './index.css';
import { configureStore } from './infra/configureStore';
import MyErrorBoundary from './pages/ErrorBoundaryPage';

const initialState: any = { sambodhan: 'Ram Ram' };

const store = configureStore({ initialState });

ReactDOM.render(
  <React.StrictMode>
    <CombineProvider
      components={[
        customProvider(Provider, { store }) as any,
        customProvider(MyErrorBoundary, {}) as any,
      ]}
    >
      {/*<Provider store={store}>*/}
      <App name="Keshav" />
      {/*</Provider>*/}
    </CombineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
