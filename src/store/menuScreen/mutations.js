export const updateMenuScreenState = (state, boolean) => {
  state.menuScreenState = boolean;
  //switch off scrolling when menu active
  let bodyEl = document.body;
  state.menuScreenState
    ? bodyEl.classList.add("no-scroll")
    : bodyEl.classList.remove("no-scroll");
};
