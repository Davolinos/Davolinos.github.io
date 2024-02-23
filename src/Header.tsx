import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="flex top-0 right-0 h-20 bg-slate-300 justify-around items-center">
            <Link className="font-bold text-lg" to={'/'}>
                Hudaya's <span>Note</span>
            </Link>
                <Link className="mg-10" to={'articles'}>Articles</Link>
                <Link className="mg-10" to={'stories'}>Stories</Link>
                <Link className="mg-10" to={'about'}>About</Link>
        </div>
    );
}

export default Header;