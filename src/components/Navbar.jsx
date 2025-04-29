import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="sticky top-0 p-2 h-20 w-full flex bg-amber-950 items-center justify-center">
            <nav className="
                    m-2
                    h-full w-3/4
                    bg-amber-800/15
                    flex
                    items-center justify-center
                    gap-1.5 
                    rounded-2xl
                    ">
                <NavItem
                    to="/"
                    text="Home" 
                />
                <NavItem
                    to="/poem"
                    text="Poem" 
                />
                <NavItem
                    to="/cards"
                    text="Cards" 
                />
            </nav>
        </div>
    )
}

function NavItem({to, text}) {
    return (
        <Link 
            to={to}
            className="
                font-mono
                text-white
                h-5/6 w-40
                rounded-xl
                hover:rounded-tl-4xl
                hover:rounded-br-4xl
                hover:shadow-2xl
                duration-75
                m-1
                flex
                items-center
                justify-center
                bg-amber-900
                hover:text-black
                hover:bg-amber-50
                "
                >
            {text}
        </Link>
    )
}

export default Navbar;