import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate();
  return (
    <>
    <div>LoginPage</div>
    <button onClick={()=>navigate('/')}>home</button>
    </>
  )
}
