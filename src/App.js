import './App.css';
import { Discover, Trending, Homepage, MovieDetails, Actors, ActorDetails, TVDetails } from '../src/pages/index'
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
            <Route path="/people" element={<Actors />} />
            <Route path="/movies/:movieid" element={<MovieDetails/>} />
            <Route path="/tv/:tvid" element={<TVDetails/>} />
            <Route path="/people/:personid" element={<ActorDetails/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
