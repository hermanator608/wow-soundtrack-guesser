import "../App.css";
import React, { useRef, useState } from 'react';
import ReactPlayer, {
  YouTubePlayerProps as ReactPlayerYouTubeProps,
} from 'react-player/youtube';
import { ReactPlayerProps } from 'react-player';
import { css } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from './Button';
import { logEventClickWrapper } from '../utils/logEventClickWrapper';
import { useRecoilState } from 'recoil';
import {
  currentQuestionState,
  videoShownState,
  isPlayingState,
  gameStartedState
} from '../state';
import { worldOfWarcraft } from '../config';

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

const InnerContainer = styled('div')`
  ${commonStyles}
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

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
  padding: 10px;

`;


export const YoutubePlayer: React.FC<{soundtrackIndex?: number}> = ({
  soundtrackIndex
}) => {
  // Global State
  const [videoShown] = useRecoilState(videoShownState);
  const [currentQuestion] = useRecoilState(currentQuestionState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [gameStarted, ] = useRecoilState(gameStartedState);

  // Local State
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
      <ReactPlayerContainer hidden={!videoShown}>
        <InnerContainer>
          <ReactPlayer
            controls={false}
            playing={isPlaying}
            url={url}
            style={reactPlayerStyle}
            width='900'
            height='600'
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
            // onError={} // TODO: Implement Error Handling
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onStart={handleStarted}
            onProgress={handleOnProgress}
            ref={reactPlayerRef}
          />
        </InnerContainer>
      </ReactPlayerContainer>

      <MediaControlContainer>
        <Button
          className="youtube-control-button"
          icon={isPlaying ? 'pause' : 'play'}
          tooltip={isPlaying ? 'Pause' : 'Play'}
          disabled={!gameStarted}
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
              tooltip="Fast forward"
              disabled={!gameStarted}
              onClick={logEventClickWrapper({
                eventData: { ...logData, actionId: 'fastForward' },
                onClick: handleFastForward,
              })}
            />
            <Button
              className="youtube-control-button"
              icon="restart"
              tooltip="Restart"
              disabled={!gameStarted}
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

      </MediaControlContainer>

    </>
  );
};

