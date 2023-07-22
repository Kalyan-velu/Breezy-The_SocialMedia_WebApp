import {createTheme, ThemeProvider} from '@mui/material/styles'
import React, {useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ColorModeContext from './context'
import {getDesignTokens} from "./DesignTokens.jsx";

/**
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const MuiTheme = ({children}) => {
  const dispatch = useDispatch()
  const {mode} = useSelector(({theme}) => theme)


  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        dispatch({type: "THEME"})
      },
    }),
    [],
  );


  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}