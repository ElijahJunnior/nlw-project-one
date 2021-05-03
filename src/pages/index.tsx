import Header from './Header';
import ContaClick from './ContaClick';
import Footer from './Footer';

export default function Home() {
  return (
    <div style={{ 'width': '800px', 'padding': '15px', 'margin': '0 auto', 'background': '#fff' }}>
      <Header />
      <ContaClick />
      <Footer text_color='#ccc'> Elias Junior </Footer>
    </div>
  )
}
