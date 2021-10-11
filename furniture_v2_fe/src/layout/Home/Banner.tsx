import clsx from "clsx";
import TAG_DEFINE from "../../constant/tagDefine";
import Wrapper from "../../Component/Wrapper";
import { Parallax, Background } from "react-parallax";
import Image from "../../Component/Image";
import { getRestProps } from "../../Util/functions";

interface Props extends Omit<getRestProps, "restProps"> {

}

const Banner: React.FC<Props> = (props) => {
  return (
    <Wrapper
      id="carouselExampleIndicators"
      className={clsx("carousel slide", props.className)}
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.length > 0 &&
          TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.map((item, index) => (
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={clsx(index === 0 && "active")}
            />
          ))}
      </ol>
      
      <Parallax className="furniture_home__banner" strength={500}>
        <Wrapper className="carousel-inner">
          {TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.length > 0 &&
            TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.map((item, index) => (
              <Background className={clsx("carousel-item", item.active && "active")}>
                <Wrapper className="position-absolute ml-5">
                  <Wrapper className="furniture_home__banner__content--down">
                    <span className="h3">What is Lorem Ipsum?</span>
                  </Wrapper>
                  <Wrapper className="w-50 furniture_home__banner__content--up">
                    <span className="h5">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </span>
                  </Wrapper>
                </Wrapper>
                <img className="d-block w-100 furniture_home__image" src={item.path} />
              </Background>
            ))}
        </Wrapper>
      </Parallax>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
      </a>
    </Wrapper>
  );
};

export default Banner;
