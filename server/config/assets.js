import assets from '../assets.json';
import assetsDev from '../assets_dev.json';
import config from '../../config';

let assetsObject = assets;

if(process.env.NODE_ENV !== 'production'){
  assetsObject = assetsDev;
}

export default assetsObject;
