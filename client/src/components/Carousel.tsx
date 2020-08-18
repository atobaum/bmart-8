import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CarouselBlock = styled.div`
  width: 70%;
  height: 300px;

  .wrapper {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;

    width: 100%;
    height: 100%;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    & * {
      box-sizing: border-box;
    }

    div {
      flex-shrink: 0;
      scroll-snap-align: start;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      a {
        display: block;
        height: 100%;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

type CarouselProps = {
  images: {
    imageUrl: string;
    altString: string;
    routeUrl: string;
  }[];
};

const Selector: React.FC<{
  length: number;
  onChange: (idx: number) => void;
}> = ({ length, onChange }) => {
  return (
    <div>
      {Array(length)
        .fill(0)
        .map((_, idx) => {
          return <button onClick={() => onChange(idx)}>idx</button>;
        })}
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  // to get width of the container
  const containerRef = useRef(null);
  const [curBanner, setCurBanner] = useState(0);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  useEffect(() => {
    const container = containerRef.current as any;
    container.scroll(curBanner * container.offsetWidth, 0);

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    const newTimeoutId = setTimeout(
      () => setCurBanner(curBanner < images.length - 1 ? curBanner + 1 : 0),
      3000
    );
    setTimeoutId(newTimeoutId);
  }, [curBanner]);

  return (
    <CarouselBlock>
      <div className="wrapper" ref={containerRef}>
        {images.map(({ imageUrl, altString, routeUrl }, idx) => {
          return (
            <div key={idx}>
              <Link to={routeUrl}>
                <img src={imageUrl} alt={altString}></img>
              </Link>
            </div>
          );
        })}
      </div>
      <Selector length={images.length} onChange={(idx) => setCurBanner(idx)} />
    </CarouselBlock>
  );
};

export default Carousel;
