import React,{useState,useEffect} from 'react'
import HeroSection from "./HeroSection/index"
import CardsSection from "./CardsSection/index"
import { BASE_URL } from '../../../../Core/API/endpoint'
const Home = () => {
  const [search, setSearch] = useState("");
  const [data,setData]=useState([]);
  const [load, setLoad] = useState(1);
  const fetchData = async () => {
    const res = await fetch(`${BASE_URL}shop/getAllShops`);
    const dat1 = await res.json();
    setData(dat1.shops);
    setLoad(0);
  };
  const handleSearch = async () => {
    const res = await fetch(
      `${BASE_URL}shop/getAllShops?keyword=${search}`
    );
    const data = await res.json();
    if (search.length > 0) {
      if (data["shops"].length !== 0) {
        setData(data.shops);
      } else {
          setData([]);
      }
    }
    else {
      fetchData();
  }
  setLoad(0)
  };
  useEffect(() => {
    handleSearch()
  }, [search])
  useEffect(() => {
    window.scrollTo(0,0)
    fetchData()
   }, [])
   console.log(search,data)
  return (
    <div className='text-center'>
      <HeroSection search={search} setSearch={setSearch}/>
      <CardsSection data={data} setData={setData} load={load} />
    </div>
  )
}

export default Home