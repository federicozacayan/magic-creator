import creator from './Tricks.js'

class Section{
    constructor(title, content){
        this.node = creator('section')
        this.setTitle(title)
        this.setContent(content)
    }
    get(){
        return this.node
    }
    setTitle(title){
        if(title) creator(this.node, creator('h2', title))
    }
    setContent(content){
        if(content) creator(this.node, creator('p', content))
    }
}
export default Section