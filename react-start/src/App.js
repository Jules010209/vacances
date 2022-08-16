import './App.css';

function App() {
  return (
      <div>
        <header>
          <nav>
            <p align="center">
              Navigation
            </p>
            {/* <br></br> */}
            <ul>
              <li>
                <a href='/'>
                  Home
                </a>
              </li>
              <li>
                <a href='/about'>
                  About
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section>
          <div className='articles'>
            <a href='https://blogs-articles.com/posts/1024252?query=other'>
            <div className='art-1'>
              <div>
                <h4>How many website was created ?</h4>
                <p>This article was wrote by Jules</p>
              </div>
              <div>
                <img alt='No' src='https://oxie.fr/assets/images/favicon.ico'></img>
              </div>
              <hr color='black'></hr>
              <p>Published at 18:34</p>
            </div>
            </a>
          </div>
        </section>
      </div>
  );
}

export default App;