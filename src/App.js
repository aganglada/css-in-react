import React from 'react'
import './App.css'
// import Item from './item/item0'
// import Item from './item/item1'
// import Item from './item/item2'
// import Item from './item/item3'
import Item from './item/item4'

function App() {
  return (
    <ul className="list">
      {Array(2000).fill().map((_, i) => {
        return <Item key={i}>Item {i}</Item>
      })}
    </ul>
  );
}

export default App;
