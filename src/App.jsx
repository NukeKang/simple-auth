import { useEffect } from 'react';
import './App.css';

function App() {
  const getData = async () => {
    const response = await fetch('http://localhost:4000', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form>
        <input type='text' />
        <input type='password' />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
