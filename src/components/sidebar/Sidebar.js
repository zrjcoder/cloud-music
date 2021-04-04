import React, { useContext } from 'react';

import { Box, ResponsiveContext } from 'grommet';

import { TooltipButton } from './TooltipButton';
import { UserMenu, NotificationAlert } from './index';
import { GradientGremlin } from './GradientGremlin';

export const Sidebar = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box background="brand" overflow="auto">
      {/*//? 图标  */}
      <Box align="center" pad={{ vertical: 'small' }}>
        <GradientGremlin />
      </Box>
      
      {/*//? 左边功能按钮  */}
      <Box align="center" gap={size === 'small' ? 'medium' : 'small'}>
        {['home', 'explor', 'my'].map((iconName, index) => (
          <TooltipButton key={iconName} iconName={iconName} index={index} />
        ))}
      </Box>

      <Box flex />

      <Box pad={{ vertical: 'small' }}>
      {/*//? 铃铛  */}
        <NotificationAlert />
        {/*//? 我的头像 */}
        <UserMenu alignSelf="center" />
      </Box>
    </Box>
  );
};
