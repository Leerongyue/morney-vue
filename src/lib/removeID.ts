let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function removeID() {
  if (id <= 0) {
    return;
  } else {
    id--;
    window.localStorage.setItem('_idMax', id.toString());
    return id;
  }
}

export default removeID;

