import { Outlet } from 'react-router-dom'
import classes from './App.module.scss'

const TODO = (arg: number) => {
  console.log('todo')
}
export const App = () => {
  console.log(classes)
  // TODO('123123')
  return (
    <div className={classes.className}>
      <button>123</button>
      <h1>cool</h1>
      <Outlet />
    </div>
  )
}
