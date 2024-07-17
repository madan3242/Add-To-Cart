import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({isAdmin, user, children }) => {
  if(!user){
    return <Navigate to={'/login'} replace />
  }

  if(isAdmin && user.role !== "admin") {
    return <Navigate to={'/'} replace />
  }
  return children
}

export default ProtectedRoute