import PetCards from '../../components/petcards/PetCards';
import './home.css';
// import {Image} from 'cloudinary-react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Footer from '../footer/Footer';

function Home() {
  const [allData, setAllData] = useState([])
  const [counter, setCounter] = useState("")
  const [counterb, setCounterb] = useState(0)

  const getAnimals = () => {
    axios.get(`${process.env.REACT_APP_SECRET_NAME_backendURL}/api/animals`)
      .then((res) => {
        res.data && setAllData([...res.data])
        console.log(allData);
        setCounter(allData.length)
      })
  }
  useEffect(() => {
    function a() {
      getAnimals()
      if (counterb < counter) {
        alert('התווסף דיווח חדש')
        setCounterb(counter)
      }
    }
    a()
  })

  const images = [
    ""
  ]
  const problem = [""]
  const type = [""]
  const name = [""]
  const phone = [""]
  const email = [""]
  const size = [""]
  const vailent = [""]
  const place = [""]
  const time = [""]
  const exstraD = [""]
  const id = [""]
  allData.map((e, index) => images[index] = e.photo)
  allData.map((e, index) => problem[index] = e.problem)
  allData.map((e, index) => type[index] = e.type)
  allData.map((e, index) => name[index] = e.name)
  allData.map((e, index) => phone[index] = e.phoneNumber)
  allData.map((e, index) => email[index] = e.email)
  allData.map((e, index) => size[index] = e.size)
  allData.map((e, index) => vailent[index] = e.vailent)
  allData.map((e, index) => place[index] = e.place)
  allData.map((e, index) => time[index] = e.time)
  allData.map((e, index) => exstraD[index] = e.exstraDetails)
  allData.map((e, index) => id[index] = e._id)

  return (
    <div className="home">
      <PetCards id={id} image={images} problem={problem} type={type} name={name} phone={phone} email={email} size={size} vailent={vailent} place={place} time={time} exstraD={exstraD}></PetCards>
      <Footer />
    </div>
  );
}

export default Home;
