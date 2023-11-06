
//import './App.css'
import Products from './components/Products'
import About from './components/About'
import Home from './components/Home';
import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';


function App() {

  const [value, setValue] = useState('Home');

  const handleChange = (_, value) => {
    setValue(value);
  }

  return (
    <div className="center"
    >
      <h1>Passion for Dog Fashion</h1>
      <Tabs
        value={value}
        onChange={handleChange}
        centered={true}
        color="purple">
        <Tab
          value="Home"
          label="Home">
        </Tab>
        <Tab
          value="Products"
          label="Products">
        </Tab>
        <Tab
          value="About"
          label="About">
        </Tab>
      </Tabs>
      {value === "Home" && <Home />}
      {value === "Products" && <Products />}
      {value === "About" && <About />}

    </div>

  )
}

export default App
