import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Formado em Engenharia mecânica, atualmente em transição de carreira me
      profissionalizando nas áreas de Ciência de dados, Análise e
      desenvolvimento de sistemas e desenvolvedor Full Stack.
    </Paragrafo>
    <GithubSecao>
      <img src="https://camo.githubusercontent.com/ec4f70e31f804c5f66354fcae6925bd4e3e8d885604da294431b74a4fecb9bdc/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d436c65694c2673686f775f69636f6e733d74727565267468656d653d6461726b" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=CleiL" />
    </GithubSecao>
  </section>
)

export default Sobre
