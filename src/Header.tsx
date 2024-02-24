import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="flex top-0 right-0 h-20 justify-around items-center">
            <Link className="font-bold text-2xl" to={'/'}>
                Hudaya's <span className="text-red-500">Note</span>
            </Link>
                <Link className="mg-10 font-bold" to={'articles'}>Articles</Link>
                <Link className="mg-10 font-bold" to={'stories'}>Stories</Link>
                <Link className="mg-10 font-bold" to={'about'}>About</Link>
        </div>
    );
}

export default Header;
