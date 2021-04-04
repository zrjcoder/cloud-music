/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useRef, useState } from 'react';

import { Stack, Box, Drop, Button } from 'grommet';
import { Notification } from 'grommet-icons';

const NotificationIcon = () => (
  <Stack anchor="top-right">
    <Notification />
    <Box background="accent-1" pad="xsmall" round animation="pulse" />
  </Stack>
);

export const NotificationAlert = () => {
  const ref = useRef();
  const [over, setOver] = useState();
  return (
    <Box alignSelf="center">
      <Button
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        icon={<NotificationIcon />}
        ref={ref}
      />
      {ref.current && over && (
        <Drop align={{ left: 'right' }} plain target={ref.current}>
          <Box
            animation="jiggle"
            background="accent-1"
            round={{ corner: 'left' }}
            pad="small"
            margin={{ vertical: 'large' }}
          >
            New Analytics!
          </Box>
        </Drop>
      )}
    </Box>
  );
};
