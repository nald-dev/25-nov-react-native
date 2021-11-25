
import React, { useContext } from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

import { StackScreenPropsType } from '@models/navigators'
import { AppContext } from '@references/contexts'
import globalData from '@references/global-data'

function AnotherScreen({ navigation, route }: StackScreenPropsType<'AnotherScreen'>) {
  const context = useContext(AppContext)

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: context.backgroundColor,
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <TouchableOpacity
          activeOpacity={0.8}
          onPress = {() => {
            globalData.needToRefreshList = true

            navigation.goBack()
          }}
          style={{
            alignItems: 'center',
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
            shadowRadius: 4,
            width: 275
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '500'
            }}
          >
            Refresh List
          </Text>
        </TouchableOpacity>

      <TouchableOpacity
          activeOpacity={0.8}
          onPress = {() => {
            context.setBackgroundColor('crimson')
          }}
          style={{
            alignItems: 'center',
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
            shadowRadius: 4,
            width: 275
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '500'
            }}
          >
            Change Color To Crimson
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default AnotherScreen
