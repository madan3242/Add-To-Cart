import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ isAuthenticated, user, children }) => {
  if(!isAuthenticated){
    return <Navigate to={'/login'} />
  }
  return children
}

export default ProtectedRoute