import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './core/configure-store';
import { register } from './core/service-worker';

import { GlobalStyles, theme } from 'styles';
import { Content } from 'components/styles/content';
import { Title } from 'components/styles/title';
import { Card } from 'components/styles/card';
import Grid from 'components/grid/index';
import NewButton from 'components/new-button';
import Numbers from 'components/numbers';

const { persistor, store } = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Content>
          <Title>
            {''}
            <span role="img" aria-label="logo">
              ⚛
            </span>{' '}
            Redoku
            <span role="img" aria-label="logo">
              🥋
            </span>{' '}
          </Title>
          <Card>
            <NewButton />
            <Grid />
            <Numbers />
          </Card>
        </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.querySelector('#root')
);

register();
