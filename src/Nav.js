import creator from './Tricks.js'

export class Nav{
    constructor(inner){
        this.node = creator('nav')
        this.get(inner)
    }
    get(inner){
        this.setChild(inner)
        return this.node
    }
    setChild(child){
        if(child){
            creator(this.node, child)
        }
    }
}

export default Nav