import fetch from 'isomorphic-fetch';

export const getList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{text: '这是第一个item'}]);
    }, 200);
  })
};
