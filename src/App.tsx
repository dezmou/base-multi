import { useEffect } from 'react';
import './App.css';
import { main } from './logic';
import { useRender } from './render';

function App() {
  const rd = useRender("global")

  useEffect(() => {
    ;(async () => {
      main()
    })()
  }, [])

  return <>
    <div>
      chien
    </div>
  </>
    ;
}

export default App;
