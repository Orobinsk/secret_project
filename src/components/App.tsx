import { Outlet } from 'react-router-dom'
import classes from './App.module.scss'
import { Button, Grid, ListItemButton, ListItemText } from '@mui/material'

const TODO = (arg: number) => {
  console.log('todo')
}
export const App = () => {
  console.log(classes)
  // TODO('123123')
  return (
    <div className={classes.className}>
      <button>123</button>
      <ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemButton>

      <Outlet />
      <Button variant="contained">Hello world</Button>
      <Grid container>
        <Grid item>lol</Grid>
        <Grid item ml="auto">
          shrek
        </Grid>
      </Grid>
    </div>
  )
}
