import './navbar.css';

function NavBar() {
    const textLogo = "{K:F}";
    return (
       
        <nav class="navbar navbar-expand-lg fixed-top  nav-cont">
            <div class="container-fluid ">
                <a class="navbar-brand d-flex align-content-center " href="#top">
                    <h3 class="my-0">{textLogo}</h3>
                </a>
                <button class="navbar-toggler me-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-lg-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-link" aria-current="page" href="#about">About Me</a>
                    <a class="nav-link" href="#work">Work</a>
                    <a class="nav-link" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>  
        
    )
}

export default NavBar;