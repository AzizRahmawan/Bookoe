import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

// eslint-disable-next-line react/prop-types
const SearchBookList = () => {
    const { searchKeyword } = useParams();
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(`${ENDPOINT}?search=${searchKeyword}`);
              const responseData = await response.json();
              setSearchResults(responseData.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
        };
      
        fetchData();
    },  [searchKeyword]);
    if (searchResults.length === 0) {
        return (
            <div className="container">
                <div className="not-found">
                    <h1>404</h1>
                    <h2>No Results Found</h2>
                    <p>No books match the search criteria.</p>
                    {/* Add a link to navigate back to the home page or display a button to go back */}
                </div>
            </div>
        );
    }
    const renderBooks = () => {
        const rows = [];
        for (let i = 0; i < searchResults.length; i+=5) {
            const rowBooks = searchResults.slice(i, i+5);
            const row = (
                <div key={i} className="horizontal-books-list">
                {/* eslint-disable-next-line react/prop-types */}
                {rowBooks.map((book) => (
                    <article key={book.id} className="horizontal-book">
                        <div className="book-image-container">
                            <img alt="" src={book.image_url} />
                        </div>
                        <div className="horizontal-book-description">
                            <p className="horizontal-book-title">{truncateText(book.title, 20)}</p>
                            <Link to={`/books/${book.id}`} className="see-all">Read More</Link>
                        </div>
                    </article>
                ))}
                </div>
            );
            rows.push(row);
        }
        return rows;
    }
    return <div className="container">
        {renderBooks()}
    </div>
};

export default SearchBookList;