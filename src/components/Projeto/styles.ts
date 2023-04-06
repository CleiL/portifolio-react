import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background-color: #acbdaa;
  border-radius: 8px;
`

export const Listas = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`
export const CardLista = styled.li`
  margin-bottom: 16px;
  display: grid;
`
export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`

export const CardDescription = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #black;
`

export const CardButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #0077b6;
  color: #fff;
  width: 100%;
  height: 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #023e8a;
  }
`
