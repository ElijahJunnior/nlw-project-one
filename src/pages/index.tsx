import { GetStaticProps, GetServerSideProps } from 'next'
import { api } from '../services/api'

type Episode = {
  id: string,
  title: string,
  members: string,
  published_at: string,
  thumbnail: string,
  description: string
  file: {
    url: string,
    type: string,
    duration: number,
  }
}

type HomeProps = {
  episodes: Episode[],
}

export default function Home(props: HomeProps) {

  console.log(props.episodes)

  return (
    <div>
      <div className="ContentGeneral">
        <p> {JSON.stringify(props.episodes)} </p>
      </div>
    </div>
  )

}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'asc',
    }
  });
  return {
    props: {
      episodes: data,
    },
  }
}

