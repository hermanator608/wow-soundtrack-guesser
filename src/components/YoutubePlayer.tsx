import "../App.css";
import React, { useMemo, useRef, useState } from 'react';
import ReactPlayer, {
  YouTubePlayerProps as ReactPlayerYouTubeProps,
} from 'react-player/youtube';
import { ReactPlayerProps } from 'react-player';
import { Slider, SliderProps, css } from '@mui/material';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import { FlexColumn } from '../globalStyles';
import Button from './Button';
import { logEventClickWrapper } from '../utils/logEventClickWrapper';
import debounce from 'lodash.debounce';
import { useRecoilState } from 'recoil';
import {
  currentQuestionState,
  videoShownState,
} from '../state';
import { worldOfWarcraft } from '../config';
// import { Pause } from './Pause';

const reactPlayerStyle: ReactPlayerProps['style'] = {
  pointerEvents: 'none',
  userSelect: 'none',
  zIndex: -1,
  borderRadius: '8px',
};

const commonStyles = css`
  position: relative;
  top: 0;
  left: 0;
  width: 900px;
  height: 600px;
  pointer-events: none;
`;

const ReactPlayerContainer = styled('div')<{ hidden: boolean }>`
  ${(props) =>
    props.hidden
      ? css`
          pointer-events: none;
          user-select: none;
          
          top: 100%;
          left: 100%;
        `
      : css`
          display: flex;
          align-items: center;
          justify-content: center;
          
          top: 64px;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          background: white;
        `}

  iframe {
    ${commonStyles}
  }
`;

const VolumeSlider = styled(Slider)`
  color: black;
  width: 100%;
  margin-top: 0;

  @media (min-width: 500px) {
    width: 400px;
    margin-top: 12px;
  }

  h1 {
    filter: none;
  }
`;

const InnerContainer = styled('div')`
  ${commonStyles}
  overflow: hidden;
  //display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  // @media (min-aspect-ratio: 16/9) {
  //   height: 300%;
  //   top: -100%;
  // }
  // @media (max-aspect-ratio: 16/9) {
  //   width: 300%;
  //   left: -100%;
  // }

  // @media (max-width: 500px) {
  //   width: 400%;
  //   left: -150%;
  // }
`;

const MediaContainerBase = styled('div')`
  z-index: 6;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  button {
    margin-bottom: 25px;
  }

  @media (min-width: 500px) {
    flex-direction: row;

    button {
      margin-bottom: 0;
      margin-right: 20px;
    }
  }
`;

const MediaControlContainer = styled(MediaContainerBase)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

`;

const CenteredDiv = styled('div')`
  display: flex;
  align-items: center;
`;

const MarginDiv = styled('div')`
  margin-right: 12px;
`;

export const YoutubePlayer: React.FC<{soundtrackIndex?: number}> = ({
  soundtrackIndex
}) => {
  // Global State
  const [videoShown, setVideoShown] = useRecoilState(videoShownState);
  const [currentQuestion, setCurrentQuestion] = useRecoilState(currentQuestionState);

  // Local State
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [totalTime, setTotalTime] = useState<number | undefined>(0);
  const [currentTime, setCurrentTime] = useState<number | undefined>(0);

  const reactPlayerRef = useRef<ReactPlayer>(null);

  soundtrackIndex = currentQuestion.answerIndex
  const currentAmbiance = worldOfWarcraft[soundtrackIndex];


  const handleRestart = () => {
    reactPlayerRef.current?.seekTo(currentAmbiance.startTimeS || 1, 'seconds');
  };

  const handleStarted = () => {
    setTotalTime(reactPlayerRef.current?.getDuration());
  };

  const handleFastForward = () => {
    const nextTime = (currentTime || 0) + 60 * 10; // Add 10 minutes

    reactPlayerRef.current?.seekTo(nextTime, 'seconds');
  };

  const debounceVolumeHandler = useMemo(() => {
    const handleVolume: NonNullable<SliderProps['onChange']> = (_event, value) => {
      const newVolume = Array.isArray(value) ? value[0] : value;
      console.log(newVolume);
      setVolume(newVolume);
    };

    return debounce(handleVolume, 100);
  }, [setVolume]);

  const handleOnProgress: ReactPlayerYouTubeProps['onProgress'] = (data: any) => {
    setCurrentTime(data.playedSeconds);
  };

  const logData = { currentAmbiance: currentAmbiance.name };
  let url = `https://www.youtube.com/embed/${currentAmbiance.code}`;
  if (!currentAmbiance.livestream || !!currentAmbiance.startTimeS) {
    url += `?start=${currentAmbiance.startTimeS || 1}`;
  }

  return (
    <>
      <>
        <ReactPlayerContainer hidden={!videoShown}>
          <InnerContainer>
            <ReactPlayer
              controls={false}
              playing={isPlaying}
              url={url}
              style={reactPlayerStyle}
              width='900'
              height='600'
              volume={volume}
              config={{
                playerVars: {
                  modestbranding: true,
                  color: 'black',
                  onUnstarted: () => {
                    console.error('Failed to auto-start');
                  },
                },
              }}
              playsinline={true}
              // onReady={handleOnReady}
              // onError={} // TODO: Implement Error Handling
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              // onBuffer={() => setIsBuffering(true)}
              // onBufferEnd={() => setIsBuffering(false)}
              onStart={handleStarted}
              // onEnded={handleShuffle}
              onProgress={handleOnProgress}
              ref={reactPlayerRef}
            />
          </InnerContainer>
        </ReactPlayerContainer>
        <MediaControlContainer>
          <Button
            className="youtube-control-button"
            icon={isPlaying ? 'pause' : 'play'}
            tooltip={isPlaying ? 'pause' : 'play'}
            onClick={logEventClickWrapper({
              eventData: { ...logData, actionId: isPlaying ? 'pause' : 'play' },
              onClick: () => setIsPlaying(!isPlaying),
            })}
          />
          {!currentAmbiance.livestream && (
            <>
              <Button
                className="youtube-control-button"
                icon="fastForward"
                tooltip="Fast Forward 10m"
                onClick={logEventClickWrapper({
                  eventData: { ...logData, actionId: 'fastForward' },
                  onClick: handleFastForward,
                })}
              />
              <Button
                className="youtube-control-button"
                icon="restart"
                tooltip="Restart"
                onClick={logEventClickWrapper({
                  eventData: { ...logData, actionId: 'restart' },
                  onClick: handleRestart,
                })}
              />
            </>
          )}

          <MediaContainerBase>
            <span style={{ color: 'black', fontSize: '20px' }}>
              {!!currentTime &&
                new Date(currentTime * 1000).toISOString().substr(11, 8)}{' '}
              / {!!totalTime && new Date(totalTime * 1000).toISOString().substr(11, 8)}
            </span>
          </MediaContainerBase>
          <Box sx={{ paddingLeft:2, width: 200 }}>
            <MediaContainerBase>
              <VolumeMuteIcon fontSize="large"></VolumeMuteIcon>
              <VolumeSlider
                defaultValue={1}
                aria-label="Volume"
                onChange={debounceVolumeHandler}
                valueLabelDisplay="off"
                step={0.1}
                marks
                min={0}
                max={1}
              />
            </MediaContainerBase>
          </Box>

        </MediaControlContainer>

      </>
    </>
  );
};

// TODO: Hide controls after a certain amount of time? Come back after mouse move
