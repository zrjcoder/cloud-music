import React from 'react';

import { Box } from 'grommet';

export const Avatar = ({ name, url, ...rest }) => (
  <Box
    alignContent="center"
    a11yTitle={`${name} avatar`}
    height="avatar"
    width="avatar"
    round="full"
    background="url(//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80)"
    {...rest}
  />
);
