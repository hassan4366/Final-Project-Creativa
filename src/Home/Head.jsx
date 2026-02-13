import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow({ onClick }) {
  return (
    <button className="owl-next" onClick={onClick}>
      ❯
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button className="owl-prev" onClick={onClick}>
      ❮
    </button>
  );
}

function Head() {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="main-banner">
      <Slider {...settings} className="owl-banner">
        <div className="item item-1">
          <div className="header-text">
            <span className="category">
              Toronto, <em>Canada</em>
            </span>
            <h2>
              Hurry!
              <br />
              Get the Best Villa for you
            </h2>
          </div>
        </div>

        <div className="item item-2">
          <div className="header-text">
            <span className="category">
              Melbourne, <em>Australia</em>
            </span>
            <h2>
              Be Quick!
              <br />
              Get the best villa in town
            </h2>
          </div>
        </div>

        <div className="item item-3">
          <div className="header-text">
            <span className="category">
              Miami, <em>South Florida</em>
            </span>
            <h2>
              Act Now!
              <br />
              Get the highest level penthouse
            </h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Head;
