import React from 'react'

const Error = ({erro}) => {
  if(!erro) return null;
  return (
    <p className="text-red-700">Erro: {erro}</p>
  )
}

export default Error
