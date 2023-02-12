import React from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Prices from './Prices';
import Contact from './Contact';

function Home() {
  const history = useHistory();
  const prices = () => history.push('/prices');
  const contact = () => history.push('/contact');

  return (
    <div>
      <h1>Stock Pricing Action</h1>

      <h4>Description</h4>
      <p>
        The stock market can be very time consuming to keep up with, therefore
        this application will help you keep up with the stock market.
      </p>

      <p>
        Search filtering is available for your ability to find the stock you are
        looking for.
      </p>

      <section>
        <h4>Features</h4>
        <ul>
          <li>Filter stocks by name</li>
          <li>Search for stocks</li>
          <li>Filter stocks by price</li>
          <li>Filter stocks by market cap</li>
          <li>Filter stocks by volume</li>
          <li>Filter stocks by sector</li>
        </ul>
      </section>

      <section>
        <h4>Technologies Used </h4>

        <ol>
          <li>React</li>
          <li>Express</li>
          <li>Node</li>
          <li>MongoDB</li>
        </ol>
      </section>

      <section>
        <button onClick={prices} id="Stock-Button">
          Find Stock Prices Now
        </button>

        <button onClick={contact} id="Stock-Button">
          Get In Touch
        </button>
      </section>
    </div>
  );
}

export default Home;
