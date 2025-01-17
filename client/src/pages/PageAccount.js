import React from 'react'
import { UserContext } from '../context/UserContext';

const PageAccount = () => {
  const { userLogout } = React.useContext(UserContext)

  return (
    <section>
      <h1>Conta</h1>
      <button className='btn-secundary-m' onClick={userLogout}>Sair</button>
    </section>
  )
}

export default PageAccount
