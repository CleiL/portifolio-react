import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const Projetos = () => {
  return (
    <div>
      <Titulo fontSize={16}> Projetos:</Titulo>
      <Lista>
        <li>
          <Projeto />
        </li>
      </Lista>
    </div>
  )
}

export default Projetos
