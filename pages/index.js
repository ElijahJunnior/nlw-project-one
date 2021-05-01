import Header from './Header';
import ContaClick from './ContaClick';
import Footer from './Footer';

export default function Home() {
  return (
    <div style={{ 'width': '800px', 'margin': '0 auto' }}>
      <Header />
      <ContaClick />
      <Footer text_color='#ccc'> Elias Junior </Footer>
    </div>
  )
}
