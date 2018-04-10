export const OPEN_DROP_DOWN = 'OPEN_DROP_DOWN';
export const CLOSED_DROP_DOWN = 'CLOSED_DROP_DOWN';

export const openDropdown = () => ({
  type: OPEN_DROP_DOWN,
}
);
export const closeDropdown = () => ({
  type: CLOSED_DROP_DOWN,
}
);

export const toggleDropDown = () => (dispatch,getState) => {
  const {ui} = getState();
  if(ui.dropDown.isOpen) {
    dispatch(closeDropdown());
  } else {
    dispatch(openDropdown());
  }

};
