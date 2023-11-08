import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Book.css";

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "You Do You", id: 1,
            rate: 5,
            genre: "Pengembangan Diri",
            img: "https://books.google.co.id/books/publisher/content?id=MOUREAAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1Zg8TWTDdETbaSkzwwGMurn1MTvg&w=1280",
            desc:"Buku ini mengajak pembaca untuk memahami dan mengerti diri sendiri. Semakin bertambah usia, semakin pelik masalah yang dihadapi, semakin banyak pekerjaan yang harus diselesaikan tidak membuat seseorang menjadi lebih memahami diri sendiri."
        },
        {
            title: "Bumi", id: 2,
            rate: 5,
            genre: "Fantasi",
            img: "https://img.id.my-best.com/product_images/5ad6b3afb166582647f1343edb9bc3dd.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=e640795dc5880b7e3c290e9203ea1ee0",
            desc:"Novel ini mengisahkan tentang petualangan 3 remaja yang berusia 15 tahun bernama Raib, Ali dan Seli. Namun mereka bukanlah remaja biasa, melainkan remaja yang memiliki kekuatan khusus seperti Raib yang bisa menghilang, Seli yang bisa mengeluarkan petir dan Ali seorang pelajar yang sangat jenius."
        },
        {
            title: "Sapiens", id: 3,
            rate: 4.5,
            genre: "Sejarah",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIolhiDFyWoGt9liUhdpDG-qH4X9ZkOsmT82OtX8inKo2dTROESwZups5WxVD3Ytf8Dcs&usqp=CAU",
            desc:"Sapiens membahas sisi yang tak banyak diungkit buku sejarah atau evolusi manusia lain: Bagaimana manusia berangkat dari sekedar satu spesies hewan menjadi makhluk berperadaban, melalui tiga evolusi-- Kognitif, Pertanian, dan Sains."
        },
        
    ];
    
    const navigateToDetailPage = (item) => {
        navigate(`/book/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Books</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => navigateToDetailPage(item)}
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
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} rate={item.rate}
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