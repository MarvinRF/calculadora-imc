import { useState } from 'react'
import styles from './Formulario.module.css'

const Formulario = () => {
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [respostaEstaVisivel, setRespostaEstaVisivel] = useState(false);

  const imc = () =>{
    let calculo = weight / ((height * 2));
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (calculo > 39.9) {
    return `O seu imc é de ${Math.floor(calculo)} e o seu nivel é: ` + nivel[5];
  }
  if (calculo > 34.9) {
    return `O seu imc é de ${Math.floor(calculo)} e o seu nivel é: ` + nivel[4];
  }
  if (calculo > 29.9) {
    return `O seu imc é de ${Math.floor(calculo)} e o seu nivel é: ` + nivel[3];
  }
  if (calculo > 24.9) {
    return `O seu imc é de ${Math.floor(calculo)} e o seu nivel é: ` +  nivel[2];
  }
  if (calculo > 18.5) {
    return `O seu imc é de ${Math.floor(calculo)} e o seu nivel é: ` + nivel[1];
  }
  if (calculo < 18.5) {
    return `O seu imc é de ${Math.floor(calculo)} e o seu nivel é: ` + nivel[0];
  }

  }

  return (
    <>
        <div>
        <h2>Calcule o IMC</h2>
          <form className={styles.Form}>
          <p>Peso: <input  type="number" onChange={e => setWeight(e.target.value)} /></p>
          <p>Altura:<input type="float" onChange={e => setHeight(e.target.value)} /></p>
          <button onClick={()=> setRespostaEstaVisivel(!respostaEstaVisivel)} 
          type="button">Calcular</button>
          {respostaEstaVisivel && imc()}
          </form>
        </div>
    </>
  )
}

export default Formulario