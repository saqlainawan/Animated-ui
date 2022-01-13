import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
const SCREEN_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SCREEN_WIDTH * 0.75
const SPACING = 10

// Views
export const StyledView = styled.View`
  flex: 1;
  background: #16161f;
`
export const PlaylistTextWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`
export const SongTileWrapper = styled.View`
  width: ${ITEM_WIDTH}px;
`
export const SongTileContainer = styled.View`
  background-color: white;
  margin-horizontal: ${SPACING}px;
  padding: ${SPACING * 2}px;
`

export const ImageWrapper = styled.View``

export const PlayListText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: 600;
`
export const SongCounter = styled.Text`
  color: #9d9ea0;
  text-align: center;
`
export const AlbumText = styled.Text`
  color: #fff;
  text-align: center;
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: 600;
`
export const ArtistText = styled.Text`
  text-align: center;
  font-size: 15px;
  color: #9d9ea0;
`

// Images
export const ArrowIconStyled = styled.Image`
  width: 18px;
  height: 18px;
  margin-left: 5px;
`
export const TitleImageStyled = styled.Image`
  height: 350px;
  width: auto;
  border-radius: 25px;
`
export const ListSeperator = styled.View``
