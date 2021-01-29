import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const FETCH_URL = 'https://api.thecatapi.com/v1/images/search'
  const [count,setCount] = useState(0)
  const [responses,setResponses] = useState([])
  const [images,setImages] = useState([])
  const getResponse = async () => {
    const res = await fetch(FETCH_URL)
    const json_res = await res.json()
    return json_res

  }

  useEffect(() => {
    getResponse().then((j) => {
      setResponses(j)
      pushImage(j[0])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  

  function pushImage(image) {
    setImages([...images,image])
  }

  function Cat() {
    // const url = images[count]["url"]
    if (images.length > 0) {
      const url = images[count]["url"]
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

  return (
    <div className="App">
      <container>
        <Cat />
      </container>
    </div>
  )

}

export default App;