const Header = () => {
    return (
        <header>
           <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Brady Buchholz</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class ="nav-item">
            <a class ="nav-link active" aria-current="page" href="#aboutmeheader">About</a>
            </li>
            <li class ="nav-item">
            <a class ="nav-link active" href="#work">Work</a>
            </li>
            <li class ="nav-item">
            <a class ="nav-link active" href="#contactme">Contact</a>
            </li>
            <li class ="nav-item">
            <a class ="nav-link active" href="https://www.linkedin.com/in/brady-buchholz-032b3a221/">LinkedIn</a>
            </li>
            <li class ="nav-item">
            <a class ="nav-link active" href="https://github.com/Brady1052?tab=repositories">GitHub</a>
            </li>
            <li class ="nav-item">
            <a class ="nav-link active" href="https://docdro.id/4Ojlk05">Resume</a>
            </li>
            </ul>
          </div>
        </div>
      </nav> 
        </header>
    )
}

export default Header
