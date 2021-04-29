import ContaClick from './ContaClick';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div style={{ 'width': '920px', 'margin': '0 auto', 'padding': '20px', 'background-color': '#fff' }}>
      <Header />
      <ContaClick />
      <Footer text_color='#aaa' >Elias Junior</Footer>
    </div>
  );
}

export default App;
