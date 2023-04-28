import logo from '../../Assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

type state = {
    createdAt : string|object|null,
    email : string,
    firstName: string,
    lastName: string,
    id : string|null,
    updatedAt : string|object|null,
    token : null | string
  }
export default function Header() {
    const nameSelector = useSelector((state:state) => state.firstName)
    const dispatch = useDispatch()

    function logout(e:React.MouseEvent) {
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

