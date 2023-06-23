function renderHomePage(){



    const main=document.getElementById('header-nav');
    main.id='homepage_main_container'

    main.innerHTML=`
 
    <header>
        <ul id="header-icon-list">
           
                <li><a href="/">HOME</a></li>
                <li><a href="/">About</a></li>
                <h3>Travel Planner</h3>
                <li><a href="/">Team</a></li>
                <li><a href="">Contact</a></li>
        </ul>
    </header>
    `;

    const homeSection=document.getElementById('page');
    homeSection.innerHTML=`

    <div id="main-container">
        <div id="title-message">
            <h2>project main Title</h2>
            <p>planning travel is fun time</p>
        </div>

        <div id="main_page_user_icon">
            <ul id="main_page_user_icon_list">
                <li id="userLogin">Login</li>
                <li id="userRegister">Sign up</li>
            </ul>
        </div>
    </div>  

    `;

    document.getElementById('userLogin').addEventListener('click',()=>userLogin())
    document.getElementById('userRegister').addEventListener('click',()=>userRegister())
 
   
}


console.log("Initialize is working")  