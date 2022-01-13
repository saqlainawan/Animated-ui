import React, { useCallback } from 'react'
import { Text, Button, Image, View } from 'react-native'
import {
  DurationText,
  MainControlContainer,
  NextPrevButton,
  PausePlayButton,
  PlayerControlContainer,
  PlayerControllerIconImage,
  PlayerControlWrapper,
  ProgressBar,
  ProgressBarFilled,
} from './index.styled'
import TrackPlayer, { useProgress } from 'react-native-track-player'
import NEXT_ICON from '../../../../Assets/Icons/next.png'
import PREV_ICON from '../../../../Assets/Icons/previous.png'
import PAUSE_ICON from '../../../../Assets/Icons/pause.png'
import PLAY_ICON from '../../../../Assets/Icons/play.png'
import { Spacer } from '@/Theme/components'

const PlayerControls = () => {
  const progress = useProgress()

  const handlePlayPress = useCallback(async () => {
    const state = await TrackPlayer.getState()
    if (state == 'ready' || state == 'paused') {
      TrackPlayer.play()
    } else if (state == 'playing') {
      TrackPlayer.pause()
    }
  }, [])

  const handlePausePress = useCallback(() => {
    TrackPlayer.pause()
  }, [])

  const handleNextPress = useCallback(() => {
    TrackPlayer.skip(1)
  }, [])

  const handlePrevPress = useCallback(() => {
    TrackPlayer.skipToPrevious(1)
  }, [])

  return (
    <PlayerControlWrapper>
      <Spacer marginBottom={40}>
        <ProgressBar>
          <ProgressBarFilled width={'10%'} />
        </ProgressBar>
      </Spacer>
      <PlayerControlContainer>
        <DurationText style={{ color: '#fff' }}>0.36</DurationText>
        <MainControlContainer>
          <NextPrevButton onPress={handlePrevPress}>
            <PlayerControllerIconImage source={PREV_ICON} />
          </NextPrevButton>
          <PausePlayButton onPress={handlePlayPress}>
            {/* <PlayerControllerIconImage source={PAUSE_ICON} /> */}
            <PlayerControllerIconImage source={PLAY_ICON} />
          </PausePlayButton>
          <NextPrevButton onPress={handleNextPress}>
            <PlayerControllerIconImage source={NEXT_ICON} />
          </NextPrevButton>
        </MainControlContainer>
        <DurationText style={{ color: '#fff' }}>3.30</DurationText>
      </PlayerControlContainer>
    </PlayerControlWrapper>
  )
}

export default PlayerControls
