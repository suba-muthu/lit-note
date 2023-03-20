import { useEffect, useState } from 'react';
import ShowData from './Components/ShowData';

export default function Home() {
  const [ data, setData ] = useState([]);

  async function fetchData() {
    const user = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await user.json();
    setData(jsonData)
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
      <ShowData data={data}/>
    </div>
  )
}
