import './App.css';
import Navbar from './components/Navbar.js'
import Main from './components/Main.js'
import Card from './components/Card.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="cards-container">
        <Card
          img='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
          rating='5.0'
          reviewCount='6'
          country='USA'
          title='Training sessions'
          price='$75'
        />
        <Card
          img='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
          rating='4.1'
          reviewCount='62'
          country='USA'
          title='Guitar lessons'
          price='$50'
        />
        <Card
          img='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          rating='4.8'
          reviewCount='152'
          country='Poland'
          title='Programming lessons'
          price='$100'
        />
      </div>
    </div>
  );
}

export default App;
