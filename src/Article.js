import creator from './Tricks.js'
import Section from "./Section.js"

class Article extends Section{
    constructor(title, content){
        super()
        this.node = creator('article')
        this.setTitle(title)
        this.setContent(content)
    }
}
export default Article