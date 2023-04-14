import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
class Navbar {
    constructor() {
        this.isClosed = false;
        this.body=document.querySelector("body");
        this.burgerMenu = document.querySelector("#hamburger")
        this.btnToggler=document.querySelector('.navbar-custom__toggler');
        this.navHeader = document.querySelector('.navbar-custom');
        this.dropdowns = document.querySelectorAll(".dropdown")
        this.scrollToTopBtn=document.querySelector(".button-gotop");
        this.scrollToWelcomeBtn=document.querySelector("#ourbusinessBtn");
        this.lastScrollTop = 0;
        //this.pageAbout=document.querySelector(".page-about");
        this.pageService=document.querySelector(".page-service");
        this.pageLocation=document.querySelector(".page-location");
        this.workEnvironmentLink=document.querySelector(".work-environment-link");
    }
    // 2. events
    events() {
        document.addEventListener("scroll", (event) => {
            let currentScrollPosition = window.scrollY;
            this.sticky(currentScrollPosition);
        });
        this.btnToggler.addEventListener('click', (event)=>{  
            event.preventDefault();
            this.burgerTime() 
        });
        if(this.scrollToTopBtn){
            this.scrollToTopBtn.addEventListener('click', (event)=>{  
                event.preventDefault();
                gsap.to(window, {duration: 0.1, scrollTo: 0,ease: "power2.inOut"});
            });
        }
        this.pageService.addEventListener('click', (event)=>{  
            event.preventDefault();
            let ourWork=document.querySelector('#work');
            this.scrollToSection(ourWork)
        });
    }
    // 3. methods (function, action...)
    sticky(currentScrollPosition) {
        if(currentScrollPosition<=0){
            this.navHeader.classList.remove('hide');
            this.navHeader.classList.remove('show');
        }
        else if(currentScrollPosition > this.lastScrollTop){
            this.navHeader.classList.add('hide');
            this.navHeader.classList.remove('show');
        } else {
            this.navHeader.classList.add('show');
            this.navHeader.classList.remove('hide');
        }
        this.lastScrollTop = currentScrollPosition;
        if(currentScrollPosition>750){
            if(this.scrollToTopBtn){
                this.scrollToTopBtn.classList.add('active')
            }
        }else{
            if(this.scrollToTopBtn){
                this.scrollToTopBtn.classList.remove('active')
            }
        }
    }
    burgerTime() {
        if (this.isClosed== true) {
            this.closeSideMenu();
        } else {
            this.openSideMenu()
        }
    }
    openSideMenu(){
        this.burgerMenu.classList.remove("closed");
        this.burgerMenu.classList.add("open");
        this.body.classList.add('no-scroll');
        this.isClosed = true;
    }
    closeSideMenu(){
        this.burgerMenu.classList.remove("open");
        this.burgerMenu.classList.add("closed");
        this.body.classList.remove('no-scroll');
        this.isClosed  = false;
    }
    scrollToSection(target){
        gsap.to(window, {duration: 0.1, scrollTo:target});
    }
}
export default Navbar