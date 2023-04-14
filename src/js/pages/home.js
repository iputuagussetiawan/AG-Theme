//1. Import 
import LightBoxVideo from "../modules/LightBoxVideo"
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../modules/Navbar'
const navbar=new Navbar();
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
const scroller=ScrollSmoother.create({
	smooth: 1,             // how long (in seconds) it takes to "catch up" to the native scroll position
	effects: true,           // looks for data-speed and data-lag attributes on elements
	smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});
//2. Declaration
const lightBoxVideo = new LightBoxVideo()
const fadeUp=document.querySelectorAll(".fadeUp");
if(fadeUp){
	fadeUp.forEach(fu => {
		gsap.fromTo(fu,{
			y:'20%',
			autoAlpha:0,
			
		}, {
			duration:1,
			y: 0,
			autoAlpha: 1,
			scrollTrigger: {
				trigger: fu,
				start: "top bottom",
			}
		})
	});
}

//3. Event 
window.addEventListener("load", function(){
	if (window.innerWidth >= 768) {
    	mouseFollow();
	}
	if (window.innerWidth <= 767) {
    	artsenMobile();
	}else{
		artsenDesktop();
	}
});
window.addEventListener("resize", function(){
	if (window.innerWidth >= 768) {
    	mouseFollow();
	} 
	if (window.innerWidth <= 767) {
    	artsenMobile();
	}else{
		artsenDesktop();
	}
});

//4.function
function mouseFollow(){
	let locationButton = document.querySelector('.locations-two__button');
	let locationButtonText = document.querySelector('.locations-two__button-text');
	let locationFollowArea = document.querySelectorAll('.card-location');
	let locationPage = document.querySelector('.locations-two__lists');

	function moveCircle(e) {
		gsap.to(locationButton,{
			left: e.clientX,
			top: e.clientY,
			duration:0.25
		// autoAlpha:1,
		});
	}
	document.body.addEventListener('mousemove', moveCircle);

	locationFollowArea.forEach(function(el) {
		el.addEventListener('mouseover', () => {
			let nameCard=el.dataset.name;
			let cursorName=document.querySelector(".locations-two__button-text");
			cursorName.innerHTML=nameCard;
			gsap.to(locationButton, {
				scale: 1,
				autoAlpha: 1,
				duration:0.25
			});
		});
		el.addEventListener('mouseout', () => {
			gsap.to(locationButton, {
				scale: 0.5,
				autoAlpha: 0,
				duration:0.25
			});
		});
		el.addEventListener('mousedown', () => {
			gsap.to(locationButton,  {
				css: { transform: `translate(-50%, -50%) scale(0.75)` },
				duration:0.5
			});
			gsap.to(locationButtonText, {
				css: { opacity: 1  },
				duration:0.25
			});
		});

		el.addEventListener('mouseup', () => {
			gsap.to(locationButton, {
				css: { background: `transparent` },
				duration:1
			});
			gsap.to(locationButton, {
				css: { transform: `translate(-50%, -50%) scale(1)` },
				duration:0.5
			});
			gsap.to(locationButtonText,{
				css: {
					opacity: 1
				},
			duration:0.25
			});
		});
	})
}

let sectionWorkTwo = document.querySelector(".work-two");
let workSideTitle = document.querySelector(".work-two__side-title");
if (sectionWorkTwo && workSideTitle ) {
	ScrollTrigger.create({
		trigger: '.work-two__side-title',
		start: '-300px top',
		end: () => `+=${sectionWorkTwo.offsetHeight - (workSideTitle.offsetWidth+ 300)}`,
		pin: '.work-two__side-title',
	})
}

let sectionLocationTwo = document.querySelector(".locations-two");
let locationSideTitle = document.querySelector(".locations-two__side-title");
if(sectionLocationTwo && locationSideTitle){
	ScrollTrigger.create({
		trigger: '.locations-two__side-title',
		start: '-100px top',
		end: () => `+=${sectionLocationTwo.offsetHeight - (locationSideTitle.offsetWidth+ 450)}`,
		pin: '.locations-two__side-title',
 	 	//   markers:true,
	})
}

let sectionRecruitmentTwo = document.querySelector(".recruitment-two");
let recruitmentSideTitle = document.querySelector(".recruitment-two__side-title");
if(sectionRecruitmentTwo && recruitmentSideTitle){
	ScrollTrigger.create({
		trigger: '.recruitment-two__side-title',
		start: '-150px top',
		end: () => `+=${sectionRecruitmentTwo.offsetHeight - (recruitmentSideTitle.offsetWidth+ 300)}`,
		pin: '.recruitment-two__side-title',
		//   markers:true,
	})
}

const sectionsSideTitleMobile = gsap.utils.toArray('.section-title__side-left--mobile')
sectionsSideTitleMobile.forEach( function(sectionSideTitleMobile) {
	gsap.to(sectionSideTitleMobile, {
		xPercent: -150,
		ease: "none",
		scrollTrigger: {
			trigger: sectionSideTitleMobile,
			start: "top center",
			end: "bottom top",
			scrub: true,
		}
	})
})

const sectionsSideTitleRightMobile = gsap.utils.toArray('.section-title__side-right--mobile')
sectionsSideTitleRightMobile.forEach( function(sectionSideTitleRightMobile) {
	gsap.to(sectionSideTitleRightMobile, {
		xPercent: -150,
		ease: "none",
		scrollTrigger: {
			trigger: sectionSideTitleRightMobile,
			start: "top center",
			end: "bottom top",
			scrub: true,
		}
	})
})


function artsenDesktop(){
	scroller.effects(".section-title__side-left", {speed: 1.3});
	scroller.effects(".section-title__side-right", {speed: 1.3});
}
function artsenMobile(){
	scroller.effects(".section-title__side-left", {speed: 1.2});
	scroller.effects(".section-title__side-right", {speed: 1.2});
}

gsap.utils.toArray(".image-parallax").forEach(function(container) {
	let image = container.querySelector("img");
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scrub: true,
			pin: false,
			//markers:true
		},
	}); 
	tl.from(image, {
		yPercent: -30,
		ease: "none",
	}).to(image, {
		yPercent: 30,
		ease: "none",
	}); 
});

const sections = gsap.utils.toArray('.section-overlap')
sections.forEach( function(section) {
	ScrollTrigger.create({
		trigger: section,
		start: 'top top',
		end: '+=100%',
		pin: true,
		pinSpacing: false
	})
})

const scrollToBottom=document.querySelector('.banner-three__scroll-bottom');
const scrollToBottomTarget=document.querySelector('.ourbusiness-two');
scrollToBottom.addEventListener("click", function(e){
	e.preventDefault();
	navbar.scrollToSection(scrollToBottomTarget);
})








