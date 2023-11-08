import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';

import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Maze Runner: The Death Cure", id: 1,
            rate: 4,
            genre: "Action",
            img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWlPGNgUiZZW7rWg2JMnJvGUS7MQW9ZJFSCujwYKVAET2jCqZw",
            desc:"The Death Cure mengambil cerita setelah pengkhianatan Teresa (Kaya Scodelario), yang telah bergabung dengan organisasi jahat WCKD – diucapkan 'Wicked' Ia mencoba menemukan obat untuk penyakit 'Flare' yang telah menghapus populasi manusia dan mengubahnya menjadi zombie."
        },
        {
            title: "John Wick: Chapter 4", id: 2,
            rate: 5,
            genre: "Action",
            img: "https://cms.cinepolis.co.id/Gallery/MOV/Movie/Thumbnail/dd7dc687fc754b60a907d9336445ab41.jpg",
            desc:"John Wick (Keanu Reeves) menemukan jalan untuk mengalahkan The High Table. Tapi sebelum dia bisa mendapatkan kebebasannya, Wick harus berhadapan dengan musuh baru dengan aliansi yang kuat di seluruh dunia! Memaksanya mengubah teman lama menjadi musuh."
        },
        {
            title: "Wish", id: 3,
            rate: 3,
            genre: "Fantasy",
            img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5mf7nbUSp-9SkQFnhWgrQ0au9p-N0FfknMK0AEnKClCMRhtqd",
            desc:"Wish berlatarkan kerajaan fiksi Rosas, seorang wanita muda optimis bernama Asha. Asha adalah sosok gadis yang memiliki peliharaan kambing bernama Valentino. Hal yang tak terduga terjadi, sebuah bintang yang menggemaskan menghampiri Asha dan membawa keajaiban bernama Star. Bangga!"
        },
        {
            title: "Elemental: Force of Nature", id: 4,
            rate: 3,
            genre: "Fantasy",
            img: "https://cdn.cgv.id/uploads/movie/compressed/23013700.jpg",
            desc: "Bercerita tentang para elemen api, air, tanah dan angin yang hidup berdampingan di Element City. Pasangan keluarga api, yaitu Barnie (Ronnie del Carmen) dan Cinder (Sheila Vosough) baru saja pindah ke Element City dari kampung halamannya demi kehidupan yang lebih baik."
        },
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/movie/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            rate={item.rate}
                            onClick={() => navigateToDetailPage(item)} 
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="movies">All Movies</p>
                    {poster.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                rate={item.rate}
                                onClick={() => navigateToDetailPage(item)} 
                            />
                            {poster.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}