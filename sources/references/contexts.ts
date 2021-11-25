import { createContext } from 'react'

interface AppContextType {
  backgroundColor: string
  setBackgroundColor: (newValue: string) => void
}

export const AppContext = createContext<AppContextType>({
  backgroundColor: '',
  setBackgroundColor: () => {}
})
