import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from 'styles';
import { Content } from 'components/styles/content';
import { Title } from 'components/styles/title';
import { Card } from 'components/styles/card';
import Grid from 'components/grid/index';
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <Title>
        <span role="img" aria-label="logo">
          🥋
        </span>{' '}
        Redoku
      </Title>
      <Card>
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.querySelector('#root')
);
