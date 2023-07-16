import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchHistoryQuery, addToSearchHistory, searchQuery, selectSearchHistory, selectSearchResults } from './redux/searchSlice';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import { FaSearch, FaList } from 'react-icons/fa';
import logoDnb from './images/logo_dnb.png';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const results = useSelector(selectSearchResults);
  const searchHistory = useSelector(selectSearchHistory);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSearch = () => {
    const searchTerms = query.split(' ').join('+');
    const url = `http://localhost:5000/api/search?q=${encodeURIComponent(searchTerms)}`;
    console.log(url);
    if (query.trim() !== '') {
      dispatch(searchQuery(url));
      dispatch(addToSearchHistory(query));
    }
  };

  const handleHistorySearch = (query) => { // Promijenjen naziv parametra
    setQuery(query);
    const modifiedSearchQuery = query.split(' ').join('+');
    const url = `http://localhost:5000/api/search?q=${encodeURIComponent(modifiedSearchQuery)}`;
    console.log(url);
    if (modifiedSearchQuery.trim() !== '') {
      dispatch(searchQuery(url));
      dispatch(addToSearchHistory(query));
    }
  };

  useEffect(() => {
    const randomValue = Math.random();
    console.log(`Generirana vrijednost: ${randomValue}`);
  }, []);

  return (
    <div className="app">
      <Button className="sidebarButton" onClick={() => setSidebarOpen(!sidebarOpen)} data-bs-toggle="tooltip" title="Sidebar">
        <FaList className='reactIcons' />
      </Button>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <h5 className='saerchHistoryTitle'>Search history:</h5>
        <ListGroup className="search-history list-group-numbered"> {/* Primjena klase 'list-group-numbered' */}
          {searchHistory.map((searchQuery, index) => (
            <ListGroup.Item key={index} onClick={() => handleHistorySearch(searchQuery)}>
              {searchQuery}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="main">
        <div className="image-container">
          <img src={logoDnb} alt="logo" />
        </div>
        <div className="search-container">
          <InputGroup className="searchInputGroup">
            <FormControl
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Unesite pojam za pretragu"
              className="search-input"
            />
            <Button onClick={handleSearch} className="searchButton" variant="outline-primary">
              Search<FaSearch className='reactIcons' />
            </Button>
          </InputGroup>
        </div>
        <ul className="results-list">
          {results.map((result, index) => (       
            result.url && result.title && (
              <li key={index}>
                <a href={result.url} dangerouslySetInnerHTML={{ __html: result.title }} />
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;