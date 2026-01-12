import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import{faBars,faGaugeHigh,faUsers,faGear,faHome,faChevronDown,faUser}from "@fortawesome/free-solid-svg-icons";

export function registerIcons(library:FaIconLibrary){
    library.addIcons(faBars,faGaugeHigh,faUsers,faGear,faHome,faChevronDown,faUser);
}   