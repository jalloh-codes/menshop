import React from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavBar/>
      <h1>Mern Shop</h1>
      <Container>
        <ItemModal/>
        <ShoppingList />
      </Container>
    </div>
    </Provider>
  );
}

export default App;
