
//import './App.css'
import Products from './components/Products'
import About from './components/About'
import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';


function App() {

  const [value, setValue] = useState('');

  const handleChange = (_, value) => {
    setValue(value);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>💛 🐶 Passion for Dog Fashion 🐶 💛</h1>
      <Tabs
        TabIndicatorProps={{ style: { background: 'black' }, text: 'black' }}
        value={value}
        onChange={handleChange}
        centered={true}
        color="pink"
        style={{ backgroundColor: 'lightyellow' }}
        textColor="inherit"
        indicatorColor="black">
        <Tab
          value="Products"
          label="Products">
        </Tab>
        <Tab
          value="About"
          label="About">
        </Tab>
      </Tabs>
      {value === "Products" && <Products />}
      {value === "About" && <About />}

    </div>

  )
}

export default App
