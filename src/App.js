import logo from './logo.svg';
import './App.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {
  let [foodItems, setFoodItem] = useState([]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      let newFoodItem = e.target.value;
      e.target.value = '';
      let newItems = [...foodItems, newFoodItem];
      setFoodItem(newItems);
    }
  }

  return (
    <div className="App">
      <Container>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className='text-success mb-4'>Healthy Food</h1>
            </div>
          </div>
          <FoodInput handleKeyDown={onKeyDown} />
          <ErrorMessage items={foodItems} />
          <FoodItems items={foodItems} />
        </div>
      </Container>
    </div>
  );
}

export default App;
