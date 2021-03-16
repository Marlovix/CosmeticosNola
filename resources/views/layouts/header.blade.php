<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <a class="navbar-brand" href="#">App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible-navbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsible-navbar">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="categories-drop" data-toggle="dropdown">
                    Categories
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">All</a>
                    <a class="dropdown-item" href="#">Category A</a>
                    <a class="dropdown-item" href="#">Category B</a>
                    <a class="dropdown-item" href="#">Category C</a>
                    <a class="dropdown-item" href="#">Category D</a>
                    <a class="dropdown-item" href="#">Category E</a>
                </div>
            </li>
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a id="cart" class="dropdown-item" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFF" class="bi bi-cart2"
                        viewBox="0 0 16 16">
                        <path
                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z">
                        </path>
                    </svg>
                </a>
            </li>
            @auth
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="account-drop" data-toggle="dropdown">
                        My account
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">My orders</a>
                        <a class="dropdown-item" href="#">Logout</a>
                    </div>
                </li>
            @endauth
            @guest
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/login') }}">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/register') }}">Register</a>
                </li>
            @endguest
        </ul>
    </div>
</nav>
