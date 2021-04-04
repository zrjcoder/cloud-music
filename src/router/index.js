
import React, { Component } from 'react'

import home from "@/pages/home/home"
import explor from "@/pages/explor/explor"
import my from "@/pages/my/my"
import search from "@/pages/search/search"
// const record = asyncComponent(() => import("@/pages/record/record"));

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Grid, Grommet } from 'grommet';

import { Sidebar } from '@/components/sidebar/Sidebar';
import { graphsTheme } from '@/theme';
import Search from '@/components/search/Search';

const GridLayout = (props) => {
  return (
    <Grid
      fill
      rows={['auto']}
      columns={['auto', 'flex']}
      areas={[
        { name: 'sidebar', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
      {...props}
    />
  )
}

export default function RouteConfig() {
  return (
    <Router>
      <Grommet theme={graphsTheme} full>
        <GridLayout>
          
          <Sidebar gridArea="sidebar" />

          <Box gridArea="main" overflow="auto">
            <Search />
            <Switch>
              <Route path="/" exact component={home} />
              <Route path="/explor" component={explor} />
              <Route path="/my" component={my} />

              <Route path="/search/:keyword" component={search} />
              {/* <Route path="/stakeholders" component={Stakeholders} />
              <Route path="/calculator" component={Calculator} /> */}
            </Switch>
          </Box>
          
        </GridLayout>
      </Grommet>
    </Router>
  )
}
