import * as React from 'react';
import { Box } from '@mui/material';

interface Props {
  imageUrl: string;
}

const BackgroundImage: React.FC<Props> = ({ imageUrl }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1
  };

  return <Box sx={style} />;
};

export default BackgroundImage;
