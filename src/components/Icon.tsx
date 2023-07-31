import React from 'react';
import {
  PlayArrow,
  Pause,
  RestartAlt,
  FastForward,

} from '@mui/icons-material';

const IconMap = {
  play: PlayArrow,
  pause: Pause,
  restart: RestartAlt,
  fastForward: FastForward
};

export type IconName = keyof typeof IconMap;

export interface IconProps {
  icon: IconName;
}

export const Icon: React.FC<IconProps> = ({ icon }) => {
  const IconComponent = IconMap[icon];

  return <IconComponent />;
};
