import HeroBanner from './Banner';
import Components from './Components';
import Navbar from './Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroBanner></HeroBanner>
      <Components></Components>
    </div>
  );
}

export default App;