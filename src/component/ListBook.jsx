// App.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function ListBook() {
    const [verticalBooks, setVerticalBooks] = useState([]);
    const [horizontalBooks, setHorizontalBooks] = useState([]);

    const getDataBooks = async () => {
        try {
        const response = await fetch(`${ENDPOINT}?page=1`);
        const responseData = await response.json();

        const verticalData = responseData.data.slice(0, 4);
        setVerticalBooks(verticalData);

        const horizontalData = responseData.data.slice(18, 23);
        setHorizontalBooks(horizontalData);
            } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getDataBooks();
    }, []);

    return (
        <div className="container">
            <div className="results">
                <div className="books-container">
                    {verticalBooks.map((book) => (
                        <>
                            <article key={book.id} className="result">
                            <div className="image-container">
                                <img alt="" src={book.image_url} />
                            </div>
                            <div className="book-description">
                                <p className="book-name">{truncateText(book.title, 30)}</p>
                                <p className="book-author">
                                By <b>{book.author.name}</b>
                                </p>
                                <p className="book-abstract">{truncateText(book.synopsis, 130)}</p>
                                {book.categories && (
                                <p className="book-categories">
                                    Categories:{" "}
                                    {book.categories.map((category) => category.name).join(", ")}
                                </p>
                                )}
                                <Link to={`/books/${book.id}`} className="see-all">Read More</Link>
                            </div>
                            </article>
                        </>
                    ))}
                </div>
                <div className="horizontal-books-list">
                    {horizontalBooks.map((book) => (
                        <article key={book.id} className="horizontal-book">
                            <div className="book-image-container">
                                <img alt="" src={book.image_url} />
                            </div>
                            <div className="horizontal-book-description">
                                <p className="horizontal-book-title">{truncateText(book.title, 20)}</p>
                                <Link to={`books/${book.id}`} className="see-all">Read More</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListBook;
