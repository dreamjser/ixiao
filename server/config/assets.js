import assets from '../assets.json';
import assetsDev from '../assets_dev.json';
import config from '../../config';

const assetsObject = null;

assetsObject = assets;

for(let p in assetsObject){
  let obj = assetsObject[p];
  for(let p in obj){
    obj[p] = obj[p];
  }
}

if(process.env.NODE_ENV !== 'production'){
  assetsObject = assetsDev;
}

export default assetsObject;
