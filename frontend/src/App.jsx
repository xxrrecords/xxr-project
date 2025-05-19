import { useEffect, useState } from 'react';

function App() {
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + '/')
      .then(res => res.text())
      .then(text => setServerTime(text))
      .catch(err => setServerTime('Error: ' + err.message));
  }, []);

  return (
    <div>
      <h1>Backend says:</h1>
      <p>{serverTime}</p>
    </div>
  );
}

export default App;
