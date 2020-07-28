import creator from './Tricks.js'

class Header {
    constructor(title) {
        this.node = creator('header', creator('h1', title || 'Header'))
    }
    get(string) {
        this.setText(string)
        return this.node
    }
    setText(string) {
        if (typeof string === 'string') {
            this.node.querySelector('h1').innerText = string
        }
    }
}
export default Header