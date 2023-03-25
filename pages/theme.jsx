import { createContext,useState,useMemo } from "react";
import { createTheme } from "@mui/material/styles";


// Color designs
export const tokens = (mode) =>({
    ...(mode === 'light' ? {

        primary:{
            600:'#1315BD',
            500:'#373AEB',
            400:'#7173F1',
            300:'#AEAFF7',
            200:'#D7D7FB',
            100:'#EBEBFD',
        },
        secondary:{
            600:'#3F4957',
            500:'#57667A',
            400:'#8996AA',
            300:'#B0B9C6',
            200:'#D8DCE3',
            100:'#EBEEF1',
        },
            
        neutral:{
            400:'#FFFF',
            700:'#0F172A',
        
        }

    }: {

        primary:{
            600:'#1315BD',
            500:'#373AEB',
            400:'#7173F1',
            300:'#AEAFF7',
            200:'#D7D7FB',
            100:'#EBEBFD',
        },
        secondary:{
            600:'#3F4957',
            500:'#57667A',
            400:'#8996AA',
            300:'#B0B9C6',
            200:'#D8DCE3',
            100:'#EBEEF1',
        
        },
        neutral:{
            400:'#FFFF',
            700:'#0F172A',
        
        }

    } )
})

//material ui theme setting

export const themeSettings = (mode) =>{
    const colors = tokens(mode)

    return {
        palatte:{
            mode:mode,
            ...(mode === 'light' ?
            {
                primary:{
                    main: colors.primary[600]
                },
                secondary:{
                    main: colors.secondary[600]
                },
                neutral:{
                    main: colors.neutral[400],
                    dark: colors.neutral[700]
                },
                background:{
                    default: colors.primary[600]
                }
            }:{
                primary:{
                    main: colors.primary[600]
                },
                secondary:{
                    main: colors.secondary[600]
                },
                neutral:{
                    main: colors.neutral[700],
                    dark: colors.neutral[400]
                },
                background:{
                    default: colors.primary[600]
                }

            }),
            typography:{
                fontFamily:['Work Sans','Lexend'].join(","),
                fontSize: 13,
                h1:{
                    fontFamily:['Work Sans'].join(","),
                    fontSize: 34,
                },
                h2:{
                    fontFamily:['Work Sans'].join(","),
                    fontSize: 20,
                },
                h3:{
                    fontFamily:['Work Sans'].join(","),
                    fontSize: 13,
                },
                h4:{
                    fontFamily:['Work Sans','Lexend'].join(","),
                    fontSize: 18,
                },
                h5:{
                    fontFamily:['Work Sans','Lexend'].join(","),
                    fontSize: 16,
                },
            }
        }
    }
}


export const colorModeContext = createContext({
    toggleColorMode: () =>{}
})

export const useMode = () =>{
    const [mode, setMode] = useState("light")

    const colorMode = useMemo(
        ()=>({
        toggleColorMode:() =>{
            setMode((prev) => (prev === 'light' ? 'dark' :'light'))
        }
    }))

    const theme = useMemo(() =>createTheme(themeSettings(mode),[mode]))

    return [theme, colorMode]
}
