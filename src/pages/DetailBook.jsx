import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";

const DetailBook = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchBookDetail = async () => {
        try {
            const response = await fetch(`${ENDPOINT}/${bookId}`);
            if (response.ok) {
                const data = await response.json();
                setBook(data);
            } else {
                setNotFound(true);
            }
        } catch (error) {
            console.error("Error fetching book details:", error);
        }
        };

        fetchBookDetail();
    }, [bookId]);

    if (notFound) {
        return (
            <div className="container">
                <div className="not-found">
                    <h1>404 </h1>
                    <h2>Book Not Found</h2>
                    <p>The requested book could not be found.</p>
                    {/* Add a link to navigate back to the home page or display a button to go back */}
                </div>
            </div>
        );
    }
    if (!book) {
        // You can render a loading spinner or other loading indicator here
        return null;
    }

    return (
        <div className="container">
        <div className="detail-content">
            <div className="detail-image">
                <img alt="" src={book.image_url} />
            </div>
            <div className="detail-desc">            
                <h1>{book.title}</h1>
                <p className='by'>
                By <b>{book.author?.name}</b>
                </p>
                <p className='synopsis'>{book.synopsis}</p>
                {book.categories && (
                <p className='category'>
                    Categories: {book.categories.map((category) => category.name).join(", ")}
                </p>
                )}
            </div>
            {/* <Link to="/" className="back-button">Back</Link> */}
        </div>
        </div>
    );
};

export default DetailBook;
