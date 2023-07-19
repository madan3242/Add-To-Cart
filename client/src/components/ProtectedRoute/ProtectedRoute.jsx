import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();
  if(!isAuthenticated){
    return navigate('/')
  }
  return children
}

export default ProtectedRoute