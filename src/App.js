import './App.css';
import {
  Navbar,
  Home,
  ChannelDetail,
  VideoDetail
} from './Components/Index';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  return (
    <>
      <Router basename='/zYoutube'>
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Routes>
          <Route
            path='/'
            exact
            element={<Home
              selectedCategory={selectedCategory}
            />}
          />
          <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        {/* <Route path='/search/:searchTerm' element={<SearchFeed />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;