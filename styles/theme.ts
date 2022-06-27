import { extendTheme } from '@chakra-ui/react'
import { fonts } from './fonts'
// 2. Extend the theme to include custom colors, fonts, etc


const config = {
    useSysyemColorMode: false,
    initialColorMode: "dark",
}
const theme = extendTheme({config, fonts })

export default theme
