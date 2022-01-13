import styled from 'styled-components/native'
import {Image} from 'react-native'

export const PlayerControlWrapper = styled.View`
  padding-horizontal: 25px;
`
export const PlayerControlContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const MainControlContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const PlayerControllerIconImage = styled(Image)`
  width: 25px;
  height: 25px;
`
export const PausePlayButton = styled.Pressable`
  margin-horizontal: 20px;
  background: #f0bbeb;
  border-radius: 50px;
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
`
export const DurationText = styled.Text`
  color: #fff;
`
export const ProgressBar = styled.View`
  height: 8px;
  border-radius: 4px;
  width: 100%;
  background: #323041;
  position: relative;
`
export const ProgressBarFilled = styled.View`
  height: 100%;
  background: #f0bbeb;
  border-radius: 4px;
`
export const NextPrevButton = styled(PausePlayButton)`
  background: transparent;
  width: auto;
  height: auto;
  background: transparent;
  margin-horizontal: 0;
`
