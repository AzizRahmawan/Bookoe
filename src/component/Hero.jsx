import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ENDPOINT = 'https://bookapi.cm.hmw.lol/api/books';
const HeroSection = () => {
    const [books, setBooks] = useState([]);

    const getDataBooks = async () => {
        try {
            const response = await fetch(ENDPOINT);
            const myBooks = await response.json();
            setBooks(myBooks.data);
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    useEffect(() => {
        getDataBooks();
    }, []);

    return (
        <div id="hero" >
            <div className="container">
            <div className="hero-section">
                <div className="content">
                <div className="text">
                    <div className="category">MUST READ</div>
                    {books.length > 0 && (
                    <>
                        <div className="title">{books[6].title}</div>
                        <div className="description">{books[6].synopsis}</div>
                        <div className="author">{books[6].author.name}</div>
                        <div className="button-container">
                        <Link to={`/books/${books[6].id}`} className="read-book">Read Book</Link>
                        {/* <div className="read-book">Read Book</div> */}
                        {/* <div className="see-all">See All Recommendations</div> */}
                        <Link to="/topList" className="see-all">See All Recommendations</Link>
                        </div>
                    </>
                    )}
                </div>
                </div>
                <div className="thumbnail-container">
                {books.slice(7, 10).map((book) => (
                    <img key={book.id} className="thumbnail" src={book.image_url} alt={`Thumbnail ${book.id}`} />
                ))}
                </div>
            </div>
            </div>
        </div>
    );
};

export default HeroSection;