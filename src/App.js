import creator from './Tricks.js'
import Header from './Header.js'
import Nav from './Nav.js'
import ListLinks from './ListLinks.js'
import Section from './Section.js'
import Article from './Article.js'
import Footer from './Footer.js'


let lorem = 'Lorem ipsum'
let links = ['link', 'link', 'link']
let content = [
    new Header('Title'),
    new Nav(new ListLinks(links).get()),
    new Section('Section', lorem),
    new Article('Article', lorem),
    creator('aside', 'Banner de google'),
    new Footer(new ListLinks(links).get())
]
content.forEach(child => {
    creator(document.body, (child.nodeType) ? child : child.get())
});