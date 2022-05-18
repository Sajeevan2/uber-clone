import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Coming = () => {
  return (
    <Wrapper>
        <ButtonContainer>
            <Link href="/">
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </Link>
        </ButtonContainer>
        <Content>
            <Logo src='https://i.ibb.co/ZMhy8ws/uber-logo.png'/>
            <ContentText>
                Coming Soon ...
            </ContentText>
            
        </Content>
    </Wrapper>
  )
}

export default Coming

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-200 p-4
`

const Logo = tw.img`
    h-40 w-auto object-contain self-center 
`

const Content = tw.div`
    flex-1 flex flex-col justify-center items-center
`

const ContentText = tw.div`
text-3xl text-gray-500 font-[600]
`
const ButtonContainer = tw.div`
  bg-white rounded-full self-start
`

const BackButton = tw.img`
h-10 cursor-pointer
`