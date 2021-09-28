import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import portadaUno from "../../assets/images/albums/arctic-album-0.jpg";
import portadaDos from "../../assets/images/albums/arctic-album-1.jpeg";
import portadaTres from "../../assets/images/albums/arctic-album-2.jpeg";
import portadaCuatro from "../../assets/images/albums/arctic-album-3.jpeg";
import portadaCinco from "../../assets/images/albums/arctic-album-4.jpg";
import portadaSeis from "../../assets/images/albums/arctic-album-5.jpg";
import portadaOcho from "../../assets/images/albums/gorillaz-demon-days.png";
import portadaNueve from "../../assets/images/albums/linkin-p-papercut.jpeg";

import "./style/albumexplorer.scss";

function AlbumExplorer() {
  return (
    <>
      <div className="album-container">
        <div className="carousel-box">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Carousel
              plugins={[
                "centered",
                "infinite",
                "arrows",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ]}
            >
              <div>
                <img src={portadaUno} />
                <h2>Arctic Monkeys</h2>
              </div>
              <div>
                <img src={portadaDos} />
                <h2>Arctic Monkeys</h2>
              </div>
              <div>
                <img src={portadaTres} />
                <h2>Arctic Monkeys</h2>
              </div>
              <div>
                <img src={portadaCuatro} />
                <h2>Arctic Monkeys</h2>
              </div>

              <div>
                <img src={portadaCinco} />
                <h2>Arctic Monkeys</h2>
              </div>

              <div>
                <img src={portadaSeis} />
                <h2>Arctic Monkeys</h2>
              </div>

              <div>
                <img src={portadaOcho} />
                <h2>Gorillaz</h2>
              </div>

              <div>
                <img src={portadaNueve} />
                <h2>Linkin Park</h2>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumExplorer;
