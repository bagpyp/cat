import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const FETCH_URL = 'https://api.thecatapi.com/v1/images/search'
  const [images,setImages] = useState([])
  const [i, setI] = useState(0)
  const getResponse = async () => {
    const res = await fetch(FETCH_URL)
    const json_res = await res.json()
    return json_res

  }

  useEffect(() => {
    getImage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getImage() {
    getResponse().then((j) => {
      pushImage(j[0])
      setI(images.length)
    })
  }

  function pushImage(image) {
    setImages([...images,image])
  }

  function handlePrev() {
    setI(i-1)
  }

  function handleNext() {
    setI(i+1)
  }

  function Buttons() {
    return(
      <div>
      <button disabled={i===0} onClick={handlePrev}>kITT1e a second Agooo!</button>
      <button onClick={getImage}>MAWR CATTTTT</button>
      <button disabled={i===images.length-1} onClick={handleNext}>Kitti3 frum b4 but uSaw alrdiez but it 2 teh RYTE ok?!</button>
      </div>
    )
  }

  function Cat() {
    // const url = images[images.length]["url"]
    if (images[i]) {
      const url = images[i]["url"]
      return (
        <img src={url} alt='a cat' />
      )
    }
    else {
      return (
        <h1>
          No cat, idk wtf 
        </h1>
      )
    }
  }
  console.log(JSON.stringify(images,null,2))
  return (
    <div className="App">
      <h1>
        Oh HAI!  Click buttInz 4 MAwr KaaaaatzZz! (づ｡◕‿‿◕｡)づ<br />
        (or...) Inspect this page for a good time ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
      </h1>
      <br /><br /><br /><br />
      <Cat />
      <Cat />      <Cat />
      <Cat />      <Cat />
      <Cat />      <Cat />
      <Cat />      <Cat />
      <br /><br /><br /><br />
      <Buttons />
      
    </div>
  )

}

export default App;