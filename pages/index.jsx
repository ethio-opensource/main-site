import { colorModeContext,tokens,useMode } from "./theme"
import {ThemeProvider, Typography,useTheme,Button, Avatar} from "@mui/material"
import {BsPlusCircle} from 'react-icons/bs'
import Image  from "next/image"
import Link from "next/link"
import {FaGreaterThan} from 'react-icons/fa'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'

const HomePage = () => {
  // const [theme, colorMode] = useMode()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <colorModeContext.Provider >
      <ThemeProvider theme={theme}>
        {/* The front section of the landing page designed for Ethio Open Source Community */}
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
              <Button variant="contained" sx={{backgroundColor:colors.neutral[700],color:'white',textTransform:'capitalize' ,borderRadius:20,padding:'5px 20px',marginX:'5px',}}>
                Support Us
              </Button>
              <Button sx={{border:'1px solid black',borderRadius:20,color:'black',textTransform:'capitalize', padding:'5px 20px',marginX:'5px'}}>
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
          {/* Companies that work with Ethio Open Source Community */}
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
                  <div >
                    <Link href='/' style={{textDecoration:'none'}}>
                      <Typography variant="h5" style={{color:colors.primary[500],display:'flex',alignItems:'center',gap:'1rem'}}>
                        Learn More
                        <FaGreaterThan/>
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
                  <Link href='/' style={{textDecoration:'none'}}>
                      <Typography variant="h5" style={{color:colors.primary[500],display:'flex',alignItems:'center',gap:'1rem'}}>
                        Learn More
                        <FaGreaterThan/>
                      </Typography>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display:'flex',height:'80vh',flexDirection:'column',alignItems:'center',justifyContent:'space-around', backgroundColor:'whitesmoke',width:'98.5vw'}}>
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
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px',color:colors.primary[500]}}>
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
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px',color:colors.primary[500]}}>
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
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px',color:colors.primary[500]}}>
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
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px',color:colors.primary[500]}}>
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
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px',color:colors.primary[500]}}>
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
                <Link href='/' style={{textDecoration:'none',marginBottom:'10px',color:colors.primary[500]}}>
                  toyota.com
                </Link>
              </div>

            </div>
            </div>
            <div>
            <Button variant="contained" sx={{ backgroundColor:colors.primary[500] ,textTransform:'capitalize' ,borderRadius:20,padding:'5px 20px',marginX:'5px',}}>
                See All Projects
              </Button>
            </div>
          </div>
          {/* Users Feedback Section  */}
          <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',background:colors.neutral[700],width:'98.5vw',gap:'4rem'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'.5rem',margin:'1rem 0 0 0'}}>
              <Typography variant="h3" style={{color:'white'}}>
                    What Our Community Members Say
              </Typography>
              <Typography variant="h5" style={{color:'white'}}>
                    Our community is made up of developers, designers, and tech enthusiasts  
              </Typography>
              <Typography variant="h5" style={{color:'white'}}>
                    from all over Ethiopia who share a passion for open technology and
              </Typography>
              <Typography variant="h5" style={{color:'white'}}>
                    collaborative problem-solving.
              </Typography>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'2rem',padding:'0 9rem',gap:'2rem'}}>
              <div style={{display:'flex',flexDirection:'column',width:'33.3%',gap:'1rem'}}>
                <div style={{display:'flex',flexDirection:'column',gap:'2rem',alignItems:'space-between',padding:'1rem', borderRadius:'16px',boxShadow:' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',background:'white'}}>
                  <div>
                    <Typography>
                        TaxPal is so easy to use I can’t help but wonder if it’s really 
                        doing the things the government expects me to do.
                    </Typography>
                  </div>
                  <div style={{display:'flex',gap:'2rem',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'column' ,gap:'10px'}}>
                        <Typography variant="h5">
                          Sheryl Berge
                        </Typography>
                        <Typography variant="h6" style={{fontSize:'12px'}}>
                          CEO at Lynch LLC
                        </Typography>
                    </div>
                    <div>
                      <Avatar alt='Sheryl Bereg' src="/image/ceo.jpg" />
                    </div>
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:'2rem',alignItems:'space-between',padding:'1rem', borderRadius:'16px',boxShadow:' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',background:'white'}}>
                  <div>
                    <Typography>
                        TaxPal is so easy to use I can’t help but wonder if it’s really 
                        doing the things the government expects me to do.
                    </Typography>
                  </div>
                  <div style={{display:'flex',gap:'2rem',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'column' ,gap:'10px'}}>
                        <Typography variant="h5">
                          Sheryl Berge
                        </Typography>
                        <Typography variant="h6" style={{fontSize:'12px'}}>
                          CEO at Lynch LLC
                        </Typography>
                    </div>
                    <div>
                      <Avatar alt='Sheryl Bereg' src="/image/ceo.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'column',width:'33.3%',gap:'1rem',padding:'2.5rem 0 0 0'}}>
                <div style={{display:'flex',flexDirection:'column',gap:'2rem',alignItems:'space-between',padding:'1rem', borderRadius:'16px',boxShadow:' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',background:'white'}}>
                  <div>
                    <Typography>
                        The best part about TaxPal is every time I pay my employees, 
                        my bank balance doesn’t go down like it used to. Looking forward 
                        to spending this extra cash when I figure out why my card is being declined.
                    </Typography>
                  </div>
                  <div style={{display:'flex',gap:'2rem',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'column' ,gap:'10px'}}>
                        <Typography variant="h5">
                          Sheryl Berge
                        </Typography>
                        <Typography variant="h6" style={{fontSize:'12px'}}>
                          CEO at Lynch LLC
                        </Typography>
                    </div>
                    <div>
                      <Avatar alt='Sheryl Bereg' src="/image/ceo.jpg" />
                    </div>
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:'2rem',alignItems:'space-between',padding:'1rem', borderRadius:'16px',boxShadow:' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',background:'white'}}>
                  <div>
                    <Typography>
                        TaxPal is so easy to use I can’t help but wonder if it’s really 
                        doing the things the government expects me to do.
                    </Typography>
                  </div>
                  <div style={{display:'flex',gap:'2rem',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'column' ,gap:'10px'}}>
                        <Typography variant="h5">
                          Sheryl Berge
                        </Typography>
                        <Typography variant="h6" style={{fontSize:'12px'}}>
                          CEO at Lynch LLC
                        </Typography>
                    </div>
                    <div>
                      <Avatar alt='Sheryl Bereg' src="/image/ceo.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'column',width:'33.3%',gap:'1rem'}}>
                <div style={{display:'flex',flexDirection:'column',gap:'2rem',alignItems:'space-between',padding:'1rem', borderRadius:'16px',boxShadow:' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',background:'white'}}>
                  <div>
                    <Typography>
                        TaxPal is so easy to use I can’t help but wonder if it’s really 
                        doing the things the government expects me to do.
                    </Typography>
                  </div>
                  <div style={{display:'flex',gap:'2rem',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'column' ,gap:'10px'}}>
                        <Typography variant="h5">
                          Sheryl Berge
                        </Typography>
                        <Typography variant="h6" style={{fontSize:'12px'}}>
                          CEO at Lynch LLC
                        </Typography>
                    </div>
                    <div>
                      <Avatar alt='Sheryl Bereg' src="/image/ceo.jpg" />
                    </div>
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:'2rem',alignItems:'space-between',padding:'1rem', borderRadius:'16px',boxShadow:' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',background:'white'}}>
                  <div>
                    <Typography>
                        TaxPal is so easy to use I can’t help but wonder if it’s really 
                        doing the things the government expects me to do.
                    </Typography>
                  </div>
                  <div style={{display:'flex',gap:'2rem',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'column' ,gap:'10px'}}>
                        <Typography variant="h5">
                          Sheryl Berge
                        </Typography>
                        <Typography variant="h6" style={{fontSize:'12px'}}>
                          CEO at Lynch LLC
                        </Typography>
                    </div>
                    <div>
                      <Avatar alt='Sheryl Bereg' src="/image/ceo.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* The frequently asked section of the landing page */}
          <div style={{display:'flex', flexDirection:'column',height:'100vh',alignItems:'center',justifyContent:'center',background:'#F8FAFC',width:'98.5vw',padding:'2rem 5rem'}}>
            <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'column',padding:'2rem',gap:'1rem',flexWrap:'wrap',width:'98.5vw',}}>
              <Typography variant="h3">
                Frequently asked questions
              </Typography>
              <Typography variant="h5">
                If you can’t find what you’re looking for, email our support team and if
              </Typography>
              <Typography variant="h5">
                you’re lucky someone will get back to you.
              </Typography>
            </div>
            <div style={{display:'flex',width:'98.5vw'}}>
              <div style={{display:'flex',flexDirection:'column',width:'33.3vw',padding:'2rem',gap:'.5rem'}}>
                <Typography variant="h5">
                Does TaxPal handle VAT?
                </Typography>
                <Typography>
                Well no, but if you move your company offshore you can probably ignore it.
                </Typography>

              </div>
              <div style={{display:'flex',width:'33.3vw',flexDirection:'column',padding:'2rem',gap:'.5rem'}}>
              <Typography variant="h5">
                Does TaxPal handle VAT?
                </Typography>
                <Typography>
                Well no, but if you move your company offshore you can probably ignore it.
                </Typography>
              </div>
              <div style={{display:'flex',width:'33.3vw',flexDirection:'column',padding:'2rem',gap:'.5rem'}}>
              <Typography variant="h5">
                Does TaxPal handle VAT?
                </Typography>
                <Typography>
                Well no, but if you move your company offshore you can probably ignore it.
                </Typography>
              </div>
              
            </div>
            <div style={{display:'flex',width:'98.5vw'}}>
              <div style={{display:'flex',flexDirection:'column',width:'33.3vw',padding:'2rem',gap:'.5rem'}}>
                <Typography variant="h5">
                Does TaxPal handle VAT?
                </Typography>
                <Typography>
                Well no, but if you move your company offshore you can probably ignore it.
                </Typography>

              </div>
              <div style={{display:'flex',width:'33.3vw',flexDirection:'column',padding:'2rem',gap:'.5rem'}}>
              <Typography variant="h5">
                Does TaxPal handle VAT?
                </Typography>
                <Typography>
                Well no, but if you move your company offshore you can probably ignore it.
                </Typography>
              </div>
              <div style={{display:'flex',width:'33.3vw',flexDirection:'column',padding:'2rem',gap:'.5rem'}}>
              <Typography variant="h5">
                Does TaxPal handle VAT?
                </Typography>
                <Typography>
                Well no, but if you move your company offshore you can probably ignore it.
                </Typography>
              </div>
              
            </div>
            <div style={{display:'flex',width:'98.5vw'}}>
              <div style={{display:'flex',flexDirection:'column',width:'33.3vw',padding:'2rem',gap:'.5rem'}}>
                <Typography variant="h5">
                Does TaxPal handle VAT?
                </Typography>
                <Typography>
                Well no, but if you move your company offshore you can probably ignore it.
                </Typography>

              </div>
              <div style={{display:'flex',width:'33.3vw',flexDirection:'column',padding:'2rem',gap:'.5rem'}}>
              <Typography variant="h5">
                Does TaxPal handle VAT?
                </Typography>
                <Typography>
                Well no, but if you move your company offshore you can probably ignore it.
                </Typography>
              </div>
              <div style={{display:'flex',width:'33.3vw',flexDirection:'column',padding:'2rem',gap:'.5rem'}}>
              <Typography variant="h5">
                Does TaxPal handle VAT?
                </Typography>
                <Typography>
                Well no, but if you move your company offshore you can probably ignore it.
                </Typography>
              </div>
              
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column',height:'100vh',alignItems:'center',justifyContent:'center',background:'blue',width:'98.5vw',gap:'2rem',color:'whitesmoke'}}>
            <Typography variant="h3">
              Stay Connected With OpenEth
            </Typography>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1.5rem'}}>
              <div style={{display:'flex',flexDirection:'column'}}>
                <form>
                  <Typography variant="h5">
                    Full Name
                  </Typography>
                  <input
                    type="text"
                    style={{borderRadius:'10px',padding:'0.5rem 2rem',margin:'1rem 0'}}
                  />
                </form>
              </div>
              <div style={{display:'flex',flexDirection:'column'}}>
                <form>
                  <Typography variant="h5">
                    Email
                  </Typography>
                  <input
                    type="email"
                    style={{borderRadius:'10px',padding:'0.5rem 2rem',margin:'1rem 0'}}
                  />
                </form>
              </div>
              <div style={{display:'flex',flexDirection:'column'}}>
                <form>
                  <Typography variant="h5">
                    Message
                  </Typography>
                  <input
                    type="text"
                    style={{borderRadius:'10px',padding:'0.5rem 2rem',margin:'1rem 0'}}
                  />
                </form>
              </div>
              <div style={{}}>
              <Typography style={{padding:'1rem 0'}}></Typography>
              <Button type="submit" style={{border:'2px solid #0F172A',backgroundColor:'#0F172A',borderRadius:'2rem',padding:'0.25rem 1.75rem',color:'white'}}>Subscibe</Button>
              </div>

            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'2rem',fontSize:'24px',color:'black'}}>
              <BsFacebook/>
              <BsInstagram/>
              <BsTwitter/>
            </div>
          </div>

        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  )
}

export default HomePage
