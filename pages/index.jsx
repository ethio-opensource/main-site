import { colorModeContext,tokens,useMode } from "./theme"
import { ThemeProvider } from "@mui/material"
import { Typography,useTheme,Button } from "@mui/material"

const HomePage = () => {
  // const [theme, colorMode] = useMode()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <colorModeContext.Provider >
      <ThemeProvider theme={theme}>
        <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
              <Typography variant = 'h1' sx={{marginRight:'10px'}}>
                    Join a
              </Typography>
              <Typography variant = 'h1' color = {colors.primary[500]}>
                vabirant community
              </Typography>
            </div>
            <Typography variant='h1' sx={{marginBottom:1}}>
              of innovators
            </Typography>
              <Typography variant = 'h5'>
                Discover and Contribute to the Latest OpenSource projects that are 
              </Typography>
            <Typography variant='h5'>
                Making differece in Ethiopia and Beyond
            </Typography>
            <div style={{display:'flex',flexDirection:'row',margin:'15px'}}>
              <Button sx={{backgroundColor:'black',color:colors.neutral[400], borderRadius:20,padding:'5px 10px',marginX:'5px'}}>
                Support Us
              </Button>
              <Button sx={{border:'1px solid black',borderRadius:20,color:'black',padding:'5px 10px',marginX:'5px'}}>
                Contribute
              </Button>

            </div>
            <div>
              
            </div>

          </div>
          <div style={{display:'flex', flexDirection:'column',height:'100vh',alignItems:'center',justifyContent:'center'}}>

          </div>
          <div style={{display:'flex', flexDirection:'column',height:'100vh',alignItems:'center',justifyContent:'center'}}>

          </div>
          <div style={{display:'flex', flexDirection:'column',height:'100vh',alignItems:'center',justifyContent:'center'}}>

          </div>
          <div style={{display:'flex', flexDirection:'column',height:'100vh',alignItems:'center',justifyContent:'center'}}>

          </div>
          <div style={{display:'flex', flexDirection:'column',height:'100vh',alignItems:'center',justifyContent:'center'}}>

          </div>

        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  )
}

export default HomePage
