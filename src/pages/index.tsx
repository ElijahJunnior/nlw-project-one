import ContaClick from './ContaClick';
import { useEffect } from 'react';

export default function Home(props) {
  return (
    <div>
      <div className="ContentGeneral">
        <p> {JSON.stringify(props.episodes)} </p>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();
  return {
    props: {
      episodes: data,
    }
  }
}
