import axios from 'axios'
import { useState, useEffect } from 'react'

import { Card, CardButton, CardLista, Listas } from './styles'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Lista } from '../../containers/Projetos/styles'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
}

const Projeto = () => {
  const [repos, setRepos] = useState<Array<Repo>>([])

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(
        'https://api.github.com/users/CleiL/repos'
      )
      setRepos(response.data)
    }

    fetchRepos()
  }, [])

  return (
    <Listas>
      {repos &&
        repos.map((repo) => (
          <CardLista key={repo.id}>
            <Card>
              <Titulo>{repo.name}</Titulo>
              <Paragrafo>{repo.description}</Paragrafo>
              <CardButton href={repo.html_url}>Acessar repositorio</CardButton>
            </Card>
          </CardLista>
        ))}
    </Listas>
  )
}

export default Projeto
