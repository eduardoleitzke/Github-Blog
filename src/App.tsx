import { GlobalStyle } from "./styles/global"
import { Router } from "./router"
import { defaultTheme } from "./styles/theme/defalt"
import {ThemeProvider} from 'styled-components'
export function App() {

  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
