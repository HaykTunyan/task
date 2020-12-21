import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import Header from './components/header/header';
import RouterPath from './routers/routerPath';
import { Layout } from 'antd';

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Switch>
        <Content className="content">
        <Switch>{renderRoutes(RouterPath)}</Switch>
        </Content>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
