import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function Latest() {
    const [latest, setLatest] = useState([]);

    const getDataBooks = async () => {
        try {
            const topPickResponse = await fetch(`${ENDPOINT}?sort=created_at&direction=desc`);
            const topPickData = await topPickResponse.json();
            setLatest(topPickData.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getDataBooks();
    }, []);

    const renderBooks = () => {
        const rows = [];
        for (let i = 0; i < latest.length; i += 5) {
        const rowBooks = latest.slice(i, i + 5);
        const row = (
            <div key={i} className="horizontal-books-list">
            {rowBooks.map((book) => (
                <article key={book.id} className="horizontal-book">
                <div className="book-image-container">
                    <img alt="" src={book.image_url} />
                </div>
                <div className="horizontal-book-description">
                    <p className="horizontal-book-title">{truncateText(book.title, 20)}</p>
                    <p>{book.created_at}</p>
                    <Link to={`/books/${book.id}`} className="see-all">Read More</Link>
                </div>
                </article>
            ))}
            </div>
        );
        rows.push(row);
        }
        return rows;
    };

    return (
        <div className="container">
            <div className="page-header">
                <h1 className="title-page-header">Our <span>Latest</span> Collection</h1>
            </div>
            {renderBooks()}
        </div>
    )
}
export default Latest;