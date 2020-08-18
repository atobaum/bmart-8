import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CarouselBlock = styled.div<{ isDragging: boolean }>`
  width: 70%;
  height: 300px;
  overflow: hidden;

  .wrapper {
    display: flex;
    height: 100%;
    touch-action: none;
    ${({ isDragging }) => {
      return !isDragging ? 'transition: transform 400ms ease-in-out;' : '';
    }}

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

const SelectorBlock = styled.div`
  position: relative;
  margin-top: -30px;
`;

const Selector: React.FC<{
  length: number;
  onChange: (idx: number) => void;
}> = ({ length, onChange }) => {
  return (
    <SelectorBlock>
      {Array(length)
        .fill(0)
        .map((_, idx) => {
          return (
            <button key={idx} onClick={() => onChange(idx)}>
              idx
            </button>
          );
        })}
    </SelectorBlock>
  );
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  // to get width of the container
  const containerRef = useRef(null);
  const [curBanner, setCurBanner] = useState(0);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  // 마우스로 화면을 눌렀을 때의 X좌표
  const [startX, setStartX] = useState<any>(null);

  const setBanner = (idx: number, offset: number = 0) => {
    const container = containerRef.current as any;
    container.style.transform = `translateX(${-(
      curBanner * container.offsetWidth +
      offset
    )}px)`;
  };

  useEffect(() => {
    setBanner(curBanner);

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    const newTimeoutId = setTimeout(
      () => setCurBanner(curBanner < images.length - 1 ? curBanner + 1 : 0),
      3000
    );
    setTimeoutId(newTimeoutId);
    // eslint-disable-next-line
  }, [curBanner]);

  const dragStartHandler = (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();
    setStartX(evt.clientX);
    clearTimeout(timeoutId!);
    setTimeoutId(null);
  };
  const dragMoveHandler = (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (startX) setBanner(curBanner, startX - evt.clientX);
  };
  const dragEndHandler = (evt: any) => {
    evt.stopPropagation();
    setCurBanner(curBanner + (evt.clientX - startX > 0 ? -1 : 1));
    setStartX(null);
  };

  return (
    <CarouselBlock isDragging={startX !== null}>
      <div
        className="wrapper"
        ref={containerRef}
        onPointerDown={dragStartHandler}
        onPointerMove={dragMoveHandler}
        onPointerUp={dragEndHandler}>
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
