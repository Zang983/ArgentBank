import logo from '../../Assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
    const nameSelector = useSelector((state) => state.firstName)
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    function logout(e) {
        e.preventDefault()
        localStorage.clear();
        dispatch({ type: "logout" })
    }
    return (
        <header className="App">
            <nav className="main-nav">
                <Link className="main-nav-logo" to={"/"}>
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {!nameSelector && <Link className="main-nav-item" to={"/sign-in"}>
                        <i className="fa fa-user-circle"></i> Sign In
                    </Link>}
                    {nameSelector &&
                        <div><Link className="main-nav-item" to={"/user"}>
                            <i className="fa fa-user-circle"></i> {nameSelector}
                        </Link>
                            <Link className="main-nav-item" to={"/"} onClick={(e) => logout(e)}>
                                <i className="fa fa-sign-out"></i> Sign Out
                            </Link></div>
                    }
                </div>
            </nav>
        </header>
    );
}

