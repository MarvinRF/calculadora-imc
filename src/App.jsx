import { useEffect,useState } from 'react'
import Tabela from './components/Tabela'
import Formulario from './components/Formulario'
import '../src/global.css'

function App() {

  const [ocultarComponente, setOcultarComponente] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    const verificarMediaQuery = (e) => {
      if (e.matches) {
        setOcultarComponente(true);
      } else {
        setOcultarComponente(false);
      }
    };

    verificarMediaQuery(mediaQuery);

    mediaQuery.addEventListener('change', verificarMediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', verificarMediaQuery);
    };
  }, []);

  return (
    <>
      <div className='container'>
        {!ocultarComponente && <Tabela />}
        <Formulario />
      </div>
    </>
  )
}

export default App
