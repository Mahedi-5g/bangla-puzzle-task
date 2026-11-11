import HeroBanner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroBanner></HeroBanner>
    </div>
  );
}

export default App;