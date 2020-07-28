let appendChild = (el, inner) => {
    if (inner && inner.nodeType) {
        el.appendChild(inner)
    }
    return el
}

let innerText = (el, inner) =>{
    if (typeof inner === 'string') {
        el.innerText = inner
    }
    return el
}

let setAttribute = (el, params) => {
    if (typeof params === 'object') {
        for (const key in params) {
            el.setAttribute(key, params[key])
        }
    }
}

let getNode = (tag) =>{
    if (tag.nodeType) {
        return tag
    }
    throw 'Tag is not string or nodeElement'
}

let converter = (tag) =>{
    if (typeof tag === 'string') {
        return document.createElement(tag);
    }
    return getNode(tag)
}

export let creator = function (tag, inner, params) {
    let el = innerText(appendChild(converter(tag), inner), inner)
    setAttribute(el, params)
    return el;
};

export default creator
