import React,{useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../assets/carList'
import { toast } from "react-toastify";

const RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {
    const [rideDuration,setRideDuration]= useState(0)

    useEffect(() => {
        if(pickupCoordinates[0] != 0 && pickupCoordinates[1] != 0 && dropoffCoordinates[0] != 0 && dropoffCoordinates[1] != 0){
            console.log("calculating dist")
            console.log({pickupCoordinates,dropoffCoordinates})
            rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic2FqZWV2YW4yIiwiYSI6ImNrcGt3YTJyZjA1ZXAycG8xMDU1OTh6cWsifQ.qAO8uF_uBnpVo96P_krxdA`)
                        .then((res)=>res.json())
                        .then(data => {
                              console.log(data)
                              if(data.code == 'Ok'){
                                setRideDuration(data.routes[0].distance/1000)
                              }else{
                                toast.error(data.message, {
                                    autoClose: 3000,
                                    closeOnClick: true,
                                });
                              }
                            
                        })
        }
    }, [pickupCoordinates,dropoffCoordinates])
    
  return (
    <Wrapper>
       <Title>
            Choose a ride or swipe up for more
       </Title>
       <Vehicles>
            {
            carList.map((data,index)=>(
                    <Vehicle key={index}>
                        <VehicleImg src={data.imgUrl}/>
                        <VehicleDetails>
                            <Service>{data.service}</Service>
                            <Time>5 min away</Time>
                        </VehicleDetails>
                        <VehicePrice>Rs.{(rideDuration*data.multiplier).toFixed(2)}</VehicePrice>
                    </Vehicle>
            ))
           }
       </Vehicles>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 flex flex-col overflow-y-scroll
`
const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`

const Vehicles = tw.div`
    overflow-y-scroll
`
const Vehicle = tw.div`
    flex p-4 items-center
`
const VehicleImg = tw.img`
    h-14 mr-4
`

const VehicleDetails=tw.div`
    flex-1 flex flex-col
`
const Service= tw.div`
    font-medium
`
const Time = tw.div`
    text-xs text-blue-500
`
const VehicePrice = tw.div`
    text-sm font-[600]
`
