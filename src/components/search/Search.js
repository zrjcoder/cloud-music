
import React from 'react'

import { Search as SearchIcon } from 'grommet-icons';
import { Box, TextInput, Button, Grid } from 'grommet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import api from '@/api/api'

export default function Search() {
  let history = useHistory();

  const eventKeyPress = (e) => {
    if (e.key === 'Enter') {
      history.push(`/search/${e.target.value}`)
    }
  }

  return (
    <div>
      <Box elevation="medium" fill="vertical" round="small" align="center">
        <Box
          tag="header"
          width="medium"
          gap="small"
          pad={{ horizontal: 'small', top: 'small', bottom: 'small' }}
        >
          <TextInput icon={<SearchIcon />} placeholder="search ..." 
            onKeyPress={eventKeyPress}
          />
        </Box>
      </Box>

    </div>
  )
}
