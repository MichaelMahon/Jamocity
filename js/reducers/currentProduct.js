const currentProduct = (state = 'Fred Funk', action) => {
  switch (action.type) {
    case 'LOAD_PRODUCT':
      return action.text
    default:
      return state
  }
}

export default currentProduct