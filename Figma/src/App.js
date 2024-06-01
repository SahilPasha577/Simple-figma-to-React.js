import './App.css';
import { Header } from './MyComp/Header';
import { Banner } from './MyComp/Banner';
import { Footer } from './MyComp/Footer';
import { ProductSec } from './MyComp/ProductSec';

function App() {
  return (
    <div>
      <Header />
      <Banner />

      <ProductSec />
      <Footer />
    </div>
  );
}

export default App;
