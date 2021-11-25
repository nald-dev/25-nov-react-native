
import React, { useEffect, useContext } from 'react'
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { StackScreenPropsType } from '@models/navigators'

import { Sentence } from '@references/constants/sentence'
import { AppContext } from '@references/contexts'
import globalData from '@references/global-data'

function Home({ navigation, route }: StackScreenPropsType<'Home'>) {
  useEffect(() => {
    const unsubscribeFocusListener = navigation.addListener('focus', () => {
      if (globalData.needToRefreshList == true) {
        Alert.alert('Information', 'Need to refresh')

        globalData.needToRefreshList = false
      }
    })

    return unsubscribeFocusListener
  }, [navigation])

  const context = useContext(AppContext)

  return (
    <SafeAreaView
      style={{
        backgroundColor: context.backgroundColor,
        flex: 1
      }}
    >
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress = {() => navigation.navigate('AnotherScreen')}
          style={{
            backgroundColor: 'dodgerblue',
            borderRadius: 8,
            elevation: 4,
            marginHorizontal: 20,
            marginTop: 20,
            paddingHorizontal: 16,
            paddingVertical: 8,
            shadowColor: 'dimgray',
            shadowOffset: {
              height: 2,
              width: 0
            },
            shadowOpacity: 0.3,
            shadowRadius: 4
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '500'
            }}
          >
            Go To Another Screen
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style = {{
          color: 'gray',
          margin: 20,
          textAlign: 'center'
        }}
      >
        {Sentence.starterWatermark}
      </Text>
    </SafeAreaView>
  )
}

export default Home
