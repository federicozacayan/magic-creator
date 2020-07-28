import creator from './Tricks.js'

class ListLinks {
    constructor(array) {
        this.node = creator('ul')
        this.setChild(array)
    }
    get() {
        return this.node
    }
    setChild(child) {
        if (Array.isArray(child)) {
            child.map(element => {
                creator(this.node, creator('li', creator('a', element, { href: '#' })))
            })
        }
    }
}
export default ListLinks