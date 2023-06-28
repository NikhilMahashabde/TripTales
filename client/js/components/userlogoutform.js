import { renderHomePage } from "./homepage.js";
import { renderNavBar } from "./navbar.js";



function renderLogout(){
        axios.delete('/logout').then(()=>{
            renderNavBar();//refreshing top main pages
            renderHomePage();
        })
}
export {renderLogout};