import {useState,Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'

// <div className='absolute top-28 left-8 right-0 z-10 flex items-center justify-center'>
//     POPUP
// </div>

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () =>{

    let screenScale=null;
    let screenPostion=[0,-6.5,-43];
    let rotation=[0.1,4.7,0];

    if(window.innerWidth < 768){

      screenScale=[0.9,0.9,0.9];

    } else{

      screenScale=[1,1,1];

    }
    return [screenPostion,screenScale,rotation];
  }

  const adjustPlaneForScreenSize = () =>{

    let screenScale, screenPostion; 
    
    if(window.innerWidth < 768){

      screenScale=[1.5,1.5,1.5];
      screenPostion=[0, -1.5, 0];

    } else{

      screenScale=[3,3,3];
      screenPostion=[0,-4,-4];

    }
    return [screenPostion,screenScale,rotation];
  }

  const[islandPostion, islandScale, islandRotation]= adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
    <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
    camera={{near:0.1, far:100}}>

      <Suspense fallback={<Loader/>}>
        <directionalLight position={[10,1,1]} intensity={2}/>
        <ambientLight intensity={0.5} />
        <hemisphereLight skyColor='#b1eff' groundColor='#000000' intensity={1}/>
       
       <Bird/>
       <Sky/>

        <Island
        
        position={islandPostion}
        scale={islandScale}
        rotation={islandRotation}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        />
        <Plane/>
      </Suspense>
      
    </Canvas>
    </section>
  )
}

export default Home