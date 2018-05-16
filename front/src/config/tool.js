let setSess = (name,param) => {
  if(!name) return false;
  if(typeof(param) == 'object') {
    param = JSON.stringify(param)
  }
  sessionStorage.setItem(name,param);
}
let getSess = (name) => {
  if(!name) return false;
  return JSON.parse(sessionStorage.getItem(name));
}

export default {
  setSess,
  getSess
}
