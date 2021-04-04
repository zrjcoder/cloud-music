import React from 'react';

import { Menu, Text } from 'grommet';

import { Avatar } from './Avatar';

export const UserMenu = ({ items = [], ...rest }) => (
  <Menu
    dropAlign={{ top: 'bottom', right: 'right' }}
    icon={false}
    items={items.map(item => ({
      ...item,
      label: <Text size="small">{item.label}</Text>,
      onClick: () => { }, // no-op
    }))}
    label={<Avatar />}
    {...rest}
  />
);
