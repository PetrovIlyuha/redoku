import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from './core/configure-store';

import { GlobalStyles, theme } from 'styles';
import { Content } from 'components/styles/content';
import { Title } from 'components/styles/title';
import { Card } from 'components/styles/card';
import Grid from 'components/grid/index';

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
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
          <Grid />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.querySelector('#root')
);
