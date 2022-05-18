import React,{useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import Map from "./components/Map"
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged,signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [user,setUser] = useState(null)

  useEffect(()=>{
    return onAuthStateChanged(auth , user =>{
        if(user){
          setUser({
            name : user.displayName,
            photoUrl : user.photoURL
          })
        }else{
          setUser(null)
          router.push('/login')
        }
    })
  },[])

  return (
    <Wrapper>
        <Map/>
        <ActionItems>
          <Header>
            <Logo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg'/>
            <Profile>
              <ProfileName>{user && user.name}</ProfileName>
              <ProfileImage src= {user && user.photoUrl} onClick={()=>signOut(auth)}/>
            </Profile>
          </Header>
          <ActionButtons>
            <Link href="/Search">
              <ActionButton>
                <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png'/>
                Ride
              </ActionButton>
            </Link>
            <Link href="/Coming">
            <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png'/>
              2 Wheel
            </ActionButton>
            </Link>
            <Link href="/Coming">
            <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png'/>
              Reservation
            </ActionButton>
            </Link>
          </ActionButtons>
          <Link href="/Search">
            <InputButton>
              Where to ?
            </InputButton>
          </Link>
        </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  h-screen flex flex-col
`

const ActionItems = tw.div`
    flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`
const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition cursor-pointer
`
const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`
const Logo = tw.img`
  h-28
`
const Profile = tw.div`
  flex items-center
`
const ProfileName = tw.div`
  mr-4 text-sm
`
const ProfileImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`
