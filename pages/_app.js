import 'tailwindcss/tailwind.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
  <>
    <ToastContainer position="top-right" autoClose={5000} closeOnClick />
    <Component {...pageProps} />
  </>
  )
  
}

export default MyApp
