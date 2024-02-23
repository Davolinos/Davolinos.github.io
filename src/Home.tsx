import Header from "./Header";

interface untukKotak {
    judul: String;
    deskripsi: String;
}

function Kotak({judul, deskripsi}: untukKotak) {
    return (
        <div className="flex justify-center items-center flex-column w-[200px] h-[300px] bg-red-200">    
            <h1>{judul}</h1>
            <p>{deskripsi}</p>
        </div>
    );
}

function Home() {
    return (
        <>
            <Header />
            <div className="flex items-center justify-around">
                <Kotak judul={"1"} deskripsi={"awikwok"}/>
                <Kotak judul={"1"} deskripsi={"awikwok"}/>
                <Kotak judul={"1"} deskripsi={"awikwok"}/>
                <Kotak judul={"1"} deskripsi={"awikwok"}/>
            </div>
        </>
    );
}

export default Home;