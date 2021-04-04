import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from '@/store/store';
import Router from './router/';

const render = (Component) => {
  ReactDOM.render(
    // 绑定 redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}

render(Router)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./index', () => {
    render()
  })
}