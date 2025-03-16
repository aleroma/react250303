export const PageHeader = () => {
    return (
        <div id="PageHeader" className="bg-primary text-white text-center">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#MainNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="MainNav" className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Главная</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">О нас</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
