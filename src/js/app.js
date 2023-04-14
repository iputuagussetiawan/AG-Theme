import { Tooltip, Toast,Modal,Offcanvas} from 'bootstrap';
import Navbar from './modules/Navbar'
const navbar=new Navbar();
document.addEventListener("DOMContentLoaded", function(){
    navbar.events();
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
    document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('shown.bs.dropdown', function () {
            let el_overlay = document.createElement('span');
            el_overlay.className = 'screen-darken';
            document.body.appendChild(el_overlay)
        });
        everydropdown.addEventListener('hide.bs.dropdown', function () {
            document.body.removeChild(document.querySelector('.screen-darken'));
        });
    });
}); 





