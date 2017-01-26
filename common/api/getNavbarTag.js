const tags = ['discover', 'publish', 'my'];

export const [discover, publish, my] = tags;

export const getNavbarTag = function(){
  const url = location.href;
  let tag = '';

  for(let v of tags){
    if(url.indexOf(v) >= 0){
      tag = v;
      break;
    }
  }
  return tag;
}

