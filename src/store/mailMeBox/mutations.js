export function updateMailMeBoxState(state, val) {
  state.mailMeBoxState = val;
}

export function registerMailMeBoxToken(state, data) {
  state.mailMeBoxToken = data.jwt_token;
}
