import { useState } from "react"
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {
  const [pickup,setPickup] = useState('')
  const [dropoff,setDropoff] = useState('')

  return (
    <Wrapper>
        <ButtonContainer>
          <Link href="/">
              <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
          </Link>
        </ButtonContainer>
        <InputContainer>
            <FromToIcons>
                <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
                <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
            </FromToIcons>
            <FromToInput>
                <Input 
                  placeholder="Enter pickup location" 
                  value={pickup} 
                  onChange={(e)=>setPickup(e.target.value)}
                />
                <Input 
                  placeholder="Where to?" 
                  value={dropoff} 
                  onChange={(e)=>setDropoff(e.target.value)}
                />
            </FromToInput>
            <PlusIcon src="https://img.icons8.com/windows/50/000000/plus-math.png"/>
        </InputContainer>
        <SavedPlaces>
          <StartIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
          Saved Places
        </SavedPlaces>
        <ConfirmLocation>
          <Link href={{
            pathname:'/Confirm',
            query:{
              pickup:pickup,
              dropoff:dropoff
            }
          }}>
            <ConfirmLocationButton>
              CONFIRM LOCATION
            </ConfirmLocationButton>
          </Link>
        </ConfirmLocation>
        
    </Wrapper>
  )
}

export default Search

const Wrapper = tw.div`
  bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
  bg-white px-4
`
const BackButton = tw.img`
  h-12 cursor-pointer
`
const InputContainer = tw.div`
  bg-white flex items-center px-4 mb-2
`
const FromToIcons = tw.div`
  w-10 flex flex-col items-center justify-center mr-2
`

const Circle = tw.img`
  h-2.5
`
const Line = tw.img`
  h-10 w-5
`
const Square = tw.img`
  h-3
`
const FromToInput = tw.div`
  flex flex-col flex-1
`
const Input = tw.input`
  h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
  w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
  flex items-center bg-white px-4 py-2 font-[600]
`
const StartIcon = tw.img`
  bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`
const ConfirmLocation = tw.div`

`
const ConfirmLocationButton = tw.div`
  bg-black text-white py-2 mx-4 my-3 text-center text-xl cursor-pointer
`
