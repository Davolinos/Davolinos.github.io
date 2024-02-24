import Header from "./Header";
import { FaPerson } from "react-icons/fa6";
import { TbWriting } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface untukKotak {
    judul: React.ReactNode;
    deskripsi: String;
	link: String;
}

function Kotak(props: untukKotak) {
    return (
		<Link to={`{props.link}`}>
        <div className="rounded-xl flex justify-center items-center w-[200px] h-[100px] hover:scale-110 transition-all duration-200 bg-red-200">    
			<div className="text-center">
				<div className="flex justify-center items-center">
					{props.judul}
				</div>
				<p>{props.deskripsi}</p>
			</div>
        </div>
		</Link>
    );
}

function Home() {
    return (
        <>
            <Header />
            <div className="flex items-center justify-around h-[500px]">
                <Kotak link="about" judul={<FaPerson />} deskripsi={"About Me"}/>
                <Kotak link="articles" judul={<FaRegNewspaper />} deskripsi={"My Journal"}/>
                <Kotak link="stories" judul={<TbWriting />} deskripsi={"Stories"}/>
            </div>
        </>
    );
}

export default Home;
