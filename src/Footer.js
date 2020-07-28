import creator from './Tricks.js'
import { Nav } from "./Nav.js"

class Footer extends Nav{
    constructor(inner){
        super()
        this.node = creator('footer')
        this.setChild(inner)
    }
}
export default Footer
