export function empty(_data) {
  if (_data === null) return true 
  if (typeof _data === 'undefined') return true 
  if (typeof _data === 'string' && _data === '') return true 
  if (Array.isArray(_data) && _data.length < 1) return true 
  if (typeof _data === 'object' && _data.constructor.name === 'Object' && Object.keys(_data).length < 1 && Object.getOwnPropertyNames(_data) < 1) return true 
  if (typeof _data === 'object' && _data.constructor.name === 'String' && Object.keys(_data).length < 1) return true 

   return false
}

// 1 Depth Object
export function emptyObject(_obj , isLog) {
  let result = {
    state: true,
    key : ''
  };
  Object.keys(_obj).forEach(_key => {
    if(result.state){
      if(empty(_obj[_key])){
        if(isLog) console.log(`${_key} is no data`);
        result.state = false;
        result.key = _key;
      }
    }
  });
  return result;
}