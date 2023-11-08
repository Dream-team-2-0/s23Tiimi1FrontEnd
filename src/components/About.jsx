
export default function About() {

  return (
    <div style={{ paddingLeft: '15%', paddingRight: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', flexDirection: 'column' }}>
      <h1>About us </h1>
    
      <p>
        Passion for Dog Fashion on vuonna 2023 perustettu koiranvaateyritys. Missionamme on tuoda kaikki tyylikkäimmät koiran vaatteet,
        asusteet ja tarvikkeet helposti asiakkaan saataville yhteen paikkaan.
      </p>
      <p> Y-Tunnus: 1122334-1</p>
      <table>
        <tr>
          <th>Omistajat: </th>
        </tr>
        <tr>
          <td>
            M. Aaltonen </td>
          <td>  O. Hallenberg </td>
          <td>  A. Hirsimäki </td>
          <td>  E. Hokkanen </td>
          <td>  A. Hyppönen </td>
        </tr>
      </table>
      <br />
      <p>
        Ota yhteyttä:
        Ratapihantie 13, 00520 Helsinki <br />
        ceo@passionfordogfashion.fi
      </p>

    </div>
  );
}