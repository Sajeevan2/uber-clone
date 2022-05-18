import { useEffect,useState } from "react"
import tw from "tailwind-styled-components"
import Link from 'next/link'
import Map from "./components/Map"
import { useRouter } from "next/router"
import RideSelector from "./components/RideSelector"
import { toast } from "react-toastify";

const Confirm = () => {
  const [pickupCoordinates,setPickupCoordinates]= useState([0,0])
  const [dropoffCoordinates,setDropoffCoordinates]= useState([0,0])

  const router = useRouter()
  const { pickup,dropoff } = router.query

  const getPickupCoordinates = (pickup)=>{
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
      new URLSearchParams({
        access_token:"pk.eyJ1Ijoic2FqZWV2YW4yIiwiYSI6ImNrcGt3YTJyZjA1ZXAycG8xMDU1OTh6cWsifQ.qAO8uF_uBnpVo96P_krxdA",
        limit:1
    })
    )
    .then(response =>response.json())
    .then(data=>{
      console.log("pickup",data.features[0].center)
      setPickupCoordinates(data.features[0].center)
    })
  }

  const getDropoffCoordinates = (dropoff)=>{
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
      new URLSearchParams({
        access_token:"pk.eyJ1Ijoic2FqZWV2YW4yIiwiYSI6ImNrcGt3YTJyZjA1ZXAycG8xMDU1OTh6cWsifQ.qAO8uF_uBnpVo96P_krxdA",
        limit:1
    })
    )
    .then(response =>response.json())
    .then(data=>{
      console.log("dropoff",data.features[0].center)
      setDropoffCoordinates(data.features[0].center)
    })
  }

  useEffect(()=>{
    getPickupCoordinates(pickup)
    getDropoffCoordinates(dropoff)
  },[pickup,dropoff])

  // useEffect(()=>{
  //   if(pickupCoordinates[0] == 0 || pickupCoordinates[1] == 0 || dropoffCoordinates[0] == 0 || dropoffCoordinates[1] == 0){
  //     toast.error("No Route !", {
  //       autoClose: 3000,
  //       closeOnClick: true,
  //     });
  //   }
  // },[pickupCoordinates,dropoffCoordinates])

  return (
    <Wrapper>
        <ButtonContainer>
          <Link href="/Search">
              <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
          </Link>
        </ButtonContainer>
        <Map 
          pickupCoordinates={pickupCoordinates} 
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmContainer>
            <RideSelector
             pickupCoordinates={pickupCoordinates} 
             dropoffCoordinates={dropoffCoordinates}
            />
            <ConfirmButtonContainer>
              <ConfirmButton >
                Confirm Ride
              </ConfirmButton>
            </ConfirmButtonContainer>
        </ConfirmContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
    h-screen flex flex-col
`
const ButtonContainer = tw.div`
  bg-white rounded-full absolute top-4 left-4 z-10
`
const BackButton = tw.img`
  h-10 cursor-pointer
`
const ConfirmContainer= tw.div`
    flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
  border-t-2
`
const ConfirmButton = tw.div`
  bg-black text-white py-4 mx-4 mt-4 text-center cursor-pointer text-xl
`