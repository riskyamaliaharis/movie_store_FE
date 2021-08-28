import './Home.css';
import {Carousel} from 'react-bootstrap'
import Header from '../../components/Base/Header'
import '../../App.css'

function Home() {
    return (
      <div className="font-math">
          <Header/>      
        <Carousel> 
                 
        <Carousel.Item>
          <img
            className="d-block w-100 img-size"
            src="https://i.ytimg.com/vi/c9Q3c98IMZg/maxresdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Turbo</h3>
            <p>Nulla vitae elit libero, a pharet=ra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-size"
            src="https://4kwallpapers.com/images/wallpapers/mortal-kombat-2021-movies-poster-4096x1895-4902.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Mortal Kombat</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-size"
            src="https://wallpapercave.com/wp/wp5986550.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Movies</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
        
    );
  }

  export default Home;