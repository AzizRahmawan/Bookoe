import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home";
import TopList from "./pages/TopList";
import Latest from "./pages/Latest";
import SearchBookList from "./pages/SearchBookList";
import DetailBook from "./pages/DetailBook";
import NotFound from "./pages/NotFound";

// App.jsx
function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} >
            <Route index element={<Home/>} />
            <Route path="latest" element={<Latest/>} />
            <Route path="topList" element={<TopList/>} />
            <Route path="search/:searchKeyword" element={<SearchBookList />} />
            <Route path="books/:bookId" element={<DetailBook />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}



export default App;
