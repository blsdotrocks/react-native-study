export const modificaEmail = (input) => {
  return {
    type: 'modifica_email',
    payload: input
  }
}

export const modificaSenha = (input) => {
  return {
    type: 'modifica_senha',
    payload: input
  }
}

export const modificaNome = (input) => {
  return {
    type: 'modifica_nome',
    payload: input
  }
}
