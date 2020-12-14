import Cookie from 'js-cookie';

export function getCookie(_key) {
    return Cookie.get(_key);
}

export function setCookie(_key , _value , _expires) {
    if(getCookie(_key) == undefined)
        Cookie.set(_key , _value , _expires);
    else 
        console.log(`${_key} : 해당 쿠키가 이미 있습니다.`);
}

export function removeCookie(_key) {
    if(getCookie(_key) != undefined)
        Cookie.remove(_key);
    else 
        console.log(`${_key} : 삭제할 쿠키가 없습니다.`);
}