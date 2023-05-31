import { KeyboardEvent } from 'react'
import { useUserContext } from '../context/UserContext';
import { BsSearch } from 'react-icons/bs';
import classes from "./Search.module.css"

type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

export const Search = ({ loadUser }: SearchProps) => {

  const { userName, setUserName } = useUserContext();

  /// search on enter key:
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(userName)
    }
  }

 

  return (
    <div>
      <h1>GitHub finder</h1>
      <div className={classes.search_container}>
        <h2>Busque por um usuário:</h2>
        <p>Conheça seus melhores repositórios</p>
        <div className={classes.row}>
          <input type="text" placeholder="Digite o nome do usuário" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown} value={userName}/>
          <button onClick={() => loadUser(userName)}><BsSearch /></button>
        </div>
      </div>
    </div>
  )
}
