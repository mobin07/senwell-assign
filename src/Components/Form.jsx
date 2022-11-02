import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    Checkbox,

  Link,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  import { AiFillFacebook,AiFillTwitterCircle,AiFillLinkedin } from "react-icons/ai";
  const avatars = [
    {
      name: 'Ryan Florence',
      url: 'https://bit.ly/ryan-florence',
    },
    {
      name: 'Segun Adebayo',
      url: 'https://bit.ly/sage-adebayo',
    },
    {
      name: 'Kent Dodds',
      url: 'https://bit.ly/kent-c-dodds',
    },
    {
      name: 'Prosper Otemuyiwa',
      url: 'https://bit.ly/prosper-baba',
    },
    {
      name: 'Christian Nwamba',
      url: 'https://bit.ly/code-beast',
    },
  ];
  
  export default function Form() {
        const [email,setEmail]=useState('')
        const [pass,setPass]=useState('')
        const [count,setCount]=useState(0)
const [capital,setCapital]=useState(false)
const [special,setSpecial]=useState(false)
const [num,setNum]=useState(false)
const handleEmail=(e)=>{
setEmail(e.target.value)
}
const handlePass=(e)=>{
    setPass(e.target.value)
    setCapital(false)
    setSpecial(false)
    setNum(false)
    if(pass.match(/[A-Z]/))
    {
        setCount((prev)=>prev+1)
        setCapital(true)
    }
    if(pass.match(/[0-9]/))
    {
        setNum(true)
        setCount((prev)=>prev+1)
    }
    if(pass.match(/[!\@\#\$\%\^\&\*\(\)\_\+]/))
    {
        setSpecial(true)
        setCount((prev)=>prev+1)
    }

    }
const handleSubmit=()=>{
    if(email.length==0 || pass.length==0){
alert('please enter email or password')
    }else{
        if(capital && special && num){
            alert('login successfull')
        }else{
            alert('try strong password')
        }

    }
}
useEffect(()=>{
    
},[pass,capital,num,special])




    return (
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack spacing={{ base: 10, md: 20 }}  maxW={{ lg: 'lg',md:'md',sm:'sm' }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
              Senior web designers{' '}
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                &
              </Text>{' '}
              Full-Stack Developers
            </Heading>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                   
                    position={'relative'}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, red.400,pink.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                +
              </Text>
              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.800'}
                color={'white'}
                rounded={'full'}
                minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}>
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg',md:'md',sm:'sm' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Welcome
                
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                Login to your account to continue
              </Text>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4}>
                <Input
                type='email'
                  placeholder="awesome@user.com"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  value={email} onChange={handleEmail}
                />
                <Input
                type="password"
                value={pass} onChange={handlePass}
               
                color={capital && num && special? "green":"" || capital && num?"yellow":"" || capital && special?"yellow":"" || num && special?"yellow":"" || "red" }
                  bg={'gray.100'}
                  border={0}
                
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                 {/* <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'right'}
                justify={'space-between'}> */}
               
            <Text textAlign={'right'}><Link color={'gray.400'}>Forgot password?</Link></Text>    
              {/* </Stack> */}
                
               
                
              </Stack>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, green.400,green.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, green.600,green.600)',
                  boxShadow: 'xl',
                }}>
                Login
              </Button>
              <Stack pt={6}>
              <Text align={'center'} color={'gray.500'}>
                Don't you have an account? <Link color={'gray.400'}>SignUp!</Link>
              </Text>
            </Stack>
            <Box display={'flex'} justifyContent={'center'} marginTop={'15px'} gap={'2vw'} fontSize={'2xl'} color={'gray'}><AiFillFacebook /><AiFillTwitterCircle/><AiFillLinkedin/></Box>

            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
        />
      </Box>
    );
  }
  
  export const Blur = (props) => {
    return (
      <Icon
        width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
    );
  };