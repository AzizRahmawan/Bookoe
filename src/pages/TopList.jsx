import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function TopList() {
    const [topPickBooks, setTopPickBooks] = useState([]);

    const getDataBooks = async () => {
        try {
            const topPickResponse = await fetch(`${ENDPOINT}?is_top_pick=true&sort=rating&direction=desc`);
            const topPickData = await topPickResponse.json();
            setTopPickBooks(topPickData.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getDataBooks();
    }, []);

    const renderBooks = () => {
        const rows = [];
        for (let i = 0; i < topPickBooks.length; i += 5) {
        const rowBooks = topPickBooks.slice(i, i + 5);
        const row = (
            <div key={i} className="horizontal-books-list">
            {rowBooks.map((book) => (
                <article key={book.id} className="horizontal-book">
                <div className="book-image-container">
                    <img alt="" src={book.image_url} />
                </div>
                <div className="horizontal-book-description">
                    <p className="horizontal-book-title">{truncateText(book.title, 20)}</p>
                    <p>Rating {book.rating}</p>
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

    return <div className="container">{renderBooks()}</div>;
}
export default TopList;