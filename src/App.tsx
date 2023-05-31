import { Outlet } from 'react-router-dom'
import classes from "./App.module.css"
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <>
      <UserProvider>
        <div className={classes.app}>
            <Outlet />
        </div>
      </UserProvider>
    </>
  )
}

export default App
