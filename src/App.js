import { useState, useEffect } from 'react'
import './App.css'
import Loading from './components/Loading'
import SearchBox from './components/SearchBox'
import CardList from './components/CardList'

function App() {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')
  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }
  const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
  }, [])
  return (
    <div className="tc">
      <h1 className="f1 light-blue">RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      {robots.length === 0
        ? <Loading />
        : <CardList robots={filteredRobots} />
      }
    </div>
  );
}

export default App;
