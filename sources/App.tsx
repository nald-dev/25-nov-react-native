
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MessageListener from '@helpers/messaging-and-notification'

import StackNavigator from '@navigators/stack-navigator'
import { AppContext } from '@references/contexts'

function App() {
  const [ backgroundColor, setBackgroundColor ] = useState('pink')

  return (
    <AppContext.Provider
      value = {{
        backgroundColor,
        setBackgroundColor
      }}
    >
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>

      <MessageListener />
    </AppContext.Provider>
  )
}

export default App
