import { colorModeContext,tokens,useMode } from "./theme"
import { ThemeProvider } from "@mui/material"
import { Typography,useTheme,Button } from "@mui/material"
import {BsPlusCircle} from 'react-icons/bs'
import Image  from "next/image"
import Link from "next/link"

const HomePage = () => {
  // const [theme, colorMode] = useMode()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <colorModeContext.Provider >
      <ThemeProvider theme={theme}>
        <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'5rem'}}>
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
              <Button sx={{backgroundColor:'black',color:'white', borderRadius:20,padding:'5px 10px',marginX:'5px'}}>
                Support Us
              </Button>
              <Button sx={{border:'1px solid black',borderRadius:20,color:'black',padding:'5px 10px',marginX:'5px'}}>
                Contribute
              </Button>

            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'150px'}}>
              <div>
                <Typography variant="h5">
                  Trusted by six companies so far
                </Typography>
              </div>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',gap:'2rem'}}>
                <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                  <BsPlusCircle/>
                  <Typography variant="h6">
                    Transistors
                  </Typography>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                  <BsPlusCircle/>
                  <Typography variant="h6">
                    Transistors
                  </Typography>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                  <BsPlusCircle/>
                  <Typography variant="h6">
                    Transistors
                  </Typography>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                  <BsPlusCircle/>
                  <Typography variant="h6">
                    Transistors
                  </Typography>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                  <BsPlusCircle/>
                  <Typography variant="h6">
                    Transistors
                  </Typography>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                  <BsPlusCircle/>
                  <Typography variant="h6">
                    Transistors
                  </Typography>
                </div>

              </div>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'space-between',backgroundColor:'blue',flexWrap:'wrap',width:'98.5vw'}}>
            <div style={{margin:'2rem'}}>
              <Typography variant="h5" sx={{color:'white'}}>
                Getting Started is easy
              </Typography>
            </div>
            <div style={{display:'flex',gap:'1rem',flexDirection:'row',padding:'1rem'}}>
            <div style={{display:'flex',flexDirection:'column',backgroundColor:'white',padding:'0 4rem',margin:'0 2rem 2rem 2rem'}}>
              <div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',}}>
                  <Image 
                      src = '/svg/cloud_man.jpg'
                      alt='cloud computing image'
                      width= {300}
                      height= {300}
                    />
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
                  <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
                    <Typography variant="h5">
                      Host a project
                    </Typography>
                    <Typography variant="h6" sx={{fontWeight:'light'}}>
                    Enable your project to thrive in a neutral, trusted home, 
                    where we’ll help you scale your community with unmatched expertise, 
                    tools, and services.
                    </Typography>
                  </div>
                  <div>
                    <Link href='/'>
                      <Typography variant="h5" style={{color:colors.primary[500]}}>
                        Learn More
                      </Typography>
                    </Link>
                  </div>
              </div>
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'column',backgroundColor:'white',padding:'0 4rem',margin:'0 2rem 2rem 2rem'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',}}>
                  <Image 
                      src = '/svg/cloud_man.jpg'
                      alt='cloud computing image'
                      width= {300}
                      height= {300}
                    />
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
                  <div style={{display:'flex',flexDirection:'column',gap:'2rem',}}>
                    <Typography variant="h5">
                      Become a Member
                    </Typography>
                    <Typography variant="h6" sx={{fontWeight:'light'}}>
                    Supercharge the future of open technology. 
                    Shape the ecosystem, drive collaboration, 
                    and measure your contributions.
                    </Typography>
                  </div>
                  <div>
                    <Link href='/'>
                      <Typography variant="h5" style={{color:colors.primary[500]}}>
                        Learn More
                      </Typography>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display:'flex',height:'70vh',flexDirection:'column',alignItems:'center',justifyContent:'space-around', backgroundColor:'whitesmoke',width:'98.5vw'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',gap:'1rem'}}>
              <Typography variant="h5">
                Explore Our Projects
              </Typography>
              <Typography variant="h6" sx={{marginBottom:'2rem'}}>
                Explore the latest projects created by our community members
              </Typography>
            </div>
            <div style={{display:'flex',gap:'2rem'}}>
            <div style={{display:'flex', flexDirection:'column',alignItems:'space-between',background:'white',justifyContent:'center'}}>
              <Image
                src='/svg/toyota-1.svg'
                alt = 'Toyota logo'
                width='150'
                height='100'
                
              />
              <div style={{textAlign:'center',marginBottom:'1rem'}}>
                <Typography >
                  Toyota
                </Typography>
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px'}}>
                  toyota.com
                </Link>
              </div>

            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'space-between',background:'white',justifyContent:'center'}}>
              <Image
                src='/svg/toyota-1.svg'
                alt = 'Toyota logo'
                width='150'
                height='100'
                
              />
              <div style={{textAlign:'center',marginBottom:'1rem'}}>
                <Typography >
                  Toyota
                </Typography>
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px'}}>
                  toyota.com
                </Link>
              </div>

            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'space-between',background:'white',justifyContent:'center'}}>
              <Image
                src='/svg/toyota-1.svg'
                alt = 'Toyota logo'
                width='150'
                height='100'
                
              />
              <div style={{textAlign:'center',marginBottom:'1rem'}}>
                <Typography >
                  Toyota
                </Typography>
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px'}}>
                  toyota.com
                </Link>
              </div>

            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'space-between',background:'white',justifyContent:'center'}}>
              <Image
                src='/svg/toyota-1.svg'
                alt = 'Toyota logo'
                width='150'
                height='100'
                
              />
              <div style={{textAlign:'center',marginBottom:'1rem'}}>
                <Typography >
                  Toyota
                </Typography>
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px'}}>
                  toyota.com
                </Link>
              </div>

            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'space-between',background:'white',justifyContent:'center'}}>
              <Image
                src='/svg/toyota-1.svg'
                alt = 'Toyota logo'
                width='150'
                height='100'
                
              />
              <div style={{textAlign:'center',marginBottom:'1rem'}}>
                <Typography >
                  Toyota
                </Typography>
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px'}}>
                  toyota.com
                </Link>
              </div>

            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'space-between',background:'white',justifyContent:'center'}}>
              <Image
                src='/svg/toyota-1.svg'
                alt = 'Toyota logo'
                width='150'
                height='100'
                
              />
              <div style={{textAlign:'center',marginBottom:'1rem'}}>
                <Typography >
                  Toyota
                </Typography>
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px'}}>
                  toyota.com
                </Link>
              </div>

            </div>
            </div>



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
