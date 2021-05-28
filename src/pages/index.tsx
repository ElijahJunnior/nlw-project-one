import ContaClick from './ContaClick';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    fetch('http://localhost:3333/episodes')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <div>
      <div className="ContentGeneral">


        <p> Index </p>

        <br /> <br /> <br /> <br /> <br /> <br /> <br />

      </div>
    </div>
  )
} 
