import styles from './Tabela.module.css'

const Tabela = () => {
  return (
    <div className={styles.container}>
      <h1>Tabela IMC</h1>
    <table>
      <thead>
        <tr>
          <th className={styles.thead}><span><h3>IMC</h3></span></th>
          <th className={styles.thead}><span><h3>Resultado</h3></span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Menos do que 18,5</td>
          <td>Abaixo do peso</td>
        </tr>
        <tr>
          <td>Entre 18,5 e 24,9</td>
          <td>Peso normal</td>
        </tr>
        <tr>
          <td>Entre 25 e 29,9</td>
          <td>Sobrepeso</td>
        </tr>
        <tr>
          <td>Entre 30 e 34,9</td>
          <td>Obesidade grau 1</td>
        </tr>
        <tr>
          <td>Entre 35 e 29,9</td>
          <td>Obesidade grau 2</td>
        </tr>
        <tr>
          <td>Mais do que 40</td>
          <td>Obesidade grau 3</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Tabela