import './App.css';
import { Discover, Trending, Homepage, MovieDetails } from '../src/pages/index'
import { Sidebar, Searchbar } from '../src/components'

import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="flex bg-gray-300">
        <Sidebar />
      <div className="h-[100vh] w-full overflow-y-scroll hide-scrollbar flex flex-col bg-gray-300">
          <Searchbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/discover" element={<Discover limit={false}/>} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/movies/:movieid" element={<MovieDetails/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
