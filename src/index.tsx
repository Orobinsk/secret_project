import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import TestPage from './pages/test/TestPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <TestPage />,
      },
    ],
  },
])

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)
