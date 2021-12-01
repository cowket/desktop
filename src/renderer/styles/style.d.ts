import { EuiThemeComputed } from '@elastic/eui'
import 'styled-components'

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends EuiThemeComputed {
    [k: string]: any
  }
}
