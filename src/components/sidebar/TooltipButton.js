import React, { useRef, useState } from 'react';

import { Box, Button, Drop } from 'grommet';
import { Analytics, Calculator, Stakeholder } from 'grommet-icons';
import { Link } from "react-router-dom";

export const TooltipButton = ({ iconName, index }) => {
  const [over, setOver] = useState();

  const iconsMap = color => [
    <Analytics color={color} />,
    <Stakeholder color={color} />,
    <Calculator color={color} />,
  ];

  const tooltipColor = { color: 'accent-1', opacity: 0.9 };
  const ref = useRef();

  return (
    <Box width="100%">
      <Link to={"/" + iconName}>
        {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
        <Button
          ref={ref}
          onMouseOver={() => setOver(true)}
          onMouseLeave={() => setOver(false)}
          fill="horizontal"
          path="/home"
          hoverIndicator={tooltipColor}
          plain
        >
          {/* <Link to={"/" + iconName}>
          </Link> */}
          {({ hover }) => (
            <Box pad={{ vertical: 'small' }} align="center">
              {iconsMap(hover ? 'black' : 'white')[index]}
            </Box>
          )}
        </Button>

        {ref.current && over && (
          <Drop align={{ left: 'right' }} target={ref.current} plain>
            <Box
              animation="slideRight"
              margin="xsmall"
              pad="small"
              background={tooltipColor}
              round={{ size: 'medium', corner: 'right' }}
            >
              {iconName}
            </Box>
          </Drop>
        )}
      </Link>
    </Box>
  );
};
