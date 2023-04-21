import tour01 from '../src/images/tour-1.jpeg'
import tour02 from '../src/images/tour-2.jpeg'
import tour03 from '../src/images/tour-3.jpeg'
import tour04 from '../src/images/tour-4.jpeg'

export const pageLinks = [
    {id:1, href:'#home', text:'Home'},
    {id:2, href:'#about', text:'About Us'},
    {id:3, href:'#services', text:'Services'},
    {id:4, href:'#tours', text:'Tours'},
]

export const socialLinks = [
    {id:1, href:'https://www.twitter.com', icon:'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon:'fab fa-twitter'},
    {id:3, href:'https://www.twitter.com', icon:'fab fa-instagram'},
]

export const services = [
    {id:1, 
        icon:'fas fa-wallet fa-fw', 
        title:'saving money', 
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},

    {id:2, 
        icon:'fas fa-tree fa-fw', 
        title:'endless hiking', 
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},

    {id:2, 
        icon:'fas fa-socks fa-fw', 
        title:'amazing comfort', 
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
]

export const tours = [
    {
        id:1, 
        date:'august 26th, 2020', 
        image: tour01,
        title:'Tibet Adventure', 
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', 
        location:'china', 
        duration:'6', 
        price:'2100'},

    {
        id:2, 
        date:'august 26th, 2020', 
        image: tour02,
        title:'Tibet Adventure', 
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', 
        location:'china', 
        duration:'6', 
        price:'2100'},
    {
        id:3, 
        date:'august 26th, 2020', 
        image: tour03,
        title:'Tibet Adventure', 
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', 
        location:'china', 
        duration:'6', 
        price:'2100'},

    {
        id:4, 
        date:'august 26th, 2020', 
        image: tour04,
        title:'Tibet Adventure', 
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', 
        location:'china', 
        duration:'6', 
        price:'2100'}
]