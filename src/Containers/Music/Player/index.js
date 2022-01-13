import React, { useCallback, useEffect, useRef } from 'react'
import { StatusBar, Dimensions } from 'react-native'
import {
  AlbumText,
  ArrowIconStyled,
  ArtistText,
  ListSeperator,
  PlayListText,
  PlaylistTextWrapper,
  SongCounter,
  SongTileWrapper,
  StyledView,
  TitleImageStyled,
} from './index.styled'
import { Spacer } from '@/Theme/components'
import Animated from 'react-native-reanimated'
import TrackPlayer from 'react-native-track-player'
const downArrow = require('../../../Assets/Icons/down-arrow.png')
import { musiclibrary } from './data'
import PlayerControls from './PlayerControls'

const SCREEN_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SCREEN_WIDTH * 0.75
const SPACING = 10
const SPACER_WIDTH = (SCREEN_WIDTH - ITEM_WIDTH) / 2

const Player = () => {
  const scrollX = useRef(new Animated.Value(0)).current

  TrackPlayer.setupPlayer({})
  const renderItem = useCallback(
    ({ item, index }) => {
      const inputRange = [
        (index - 1) * ITEM_WIDTH,
        index * ITEM_WIDTH,
        (index + 1) * ITEM_WIDTH,
      ]
      const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [0.9, 1.1, 0.9],
      })
      const addExtraSpace = () => {
        if (index == 0) {
          return {
            marginLeft: SPACER_WIDTH,
          }
        } else if (index == musiclibrary.length - 1) {
          return {
            marginRight: SPACER_WIDTH,
          }
        }
        return null
      }
      return (
        <SongTileWrapper style={addExtraSpace()}>
          <Animated.View
            style={{
              marginHorizontal: SPACING,
              paddingHorizontal: SPACING / 2,
              transform: [{ scale: translateY }],
              opacity: translateY,
            }}
          >
            <Spacer marginBottom={20}>
              <TitleImageStyled
                resizeMode={'cover'}
                source={{ uri: item.artwork }}
              />
            </Spacer>
            <Spacer marginBottom={20}>
              <AlbumText>{item.album}</AlbumText>
              <ArtistText>{item.artist}</ArtistText>
            </Spacer>
          </Animated.View>
        </SongTileWrapper>
      )
    },
    [scrollX],
  )
  useEffect(() => {
    TrackPlayer.add(musiclibrary)
  })

  return (
    <StyledView>
      <StatusBar barStyle="light-content" />
      <PlaylistTextWrapper>
        <PlayListText>5Star musics</PlayListText>
        <ArrowIconStyled source={downArrow} />
      </PlaylistTextWrapper>
      <Spacer marginVertical={20} />
      <SongCounter>21 of 30</SongCounter>
      <Spacer marginVertical={20} />
      <Spacer marginBottom={30}>
        <Animated.FlatList
          horizontal={true}
          data={musiclibrary}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={ListSeperator}
          snapToInterval={ITEM_WIDTH}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          decelerationRate={0}
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true },
          )}
          style={{ overflow: 'visible' }}
          scrollEventThrottle={16}
        />
      </Spacer>
      <PlayerControls />
    </StyledView>
  )
}

export default Player
