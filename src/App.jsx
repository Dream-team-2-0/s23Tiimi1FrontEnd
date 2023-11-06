
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>💛 🐶 Passion for Dog Fashion 🐶 💛</h1>
      <Tabs
        TabIndicatorProps={{ style: { background: 'black' } }}
        value={value}
        onChange={handleChange}
        centered={true}
        color="pink">
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
