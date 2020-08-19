import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PullToRefreshBlock = styled.div`
  background: yellow;
  width: 100%;
`;

type PullToRefreshProps = {
  onRefresh: () => void;
};
const PullToRefresh: React.FC<PullToRefreshProps> = ({ onRefresh }: any) => {
  const maxSize = 100;
  const [size, setSize] = useState(0);
  const [startY, setStartY] = useState<number | null>(null);
  useEffect(() => {
    if (window.scrollY !== 0) return;
    const startHandler = (e: PointerEvent) => {
      setStartY(e.clientY);
    };

    const moveHandler = (e: PointerEvent) => {
      if (startY !== null) {
        const diffY = e.clientY - startY;
        if (diffY > 0) setSize(Math.min(diffY, maxSize));
      }
    };

    const endHandler = (e: PointerEvent) => {
      if (size === maxSize) {
        onRefresh();
      }
      setSize(0);
      setStartY(null);
    };
    document.addEventListener('pointerdown', startHandler);
    document.addEventListener('pointermove', moveHandler);
    document.addEventListener('pointerup', endHandler);
    return () => {
      document.removeEventListener('pointerdown', startHandler);
      document.removeEventListener('pointermove', moveHandler);
      document.removeEventListener('pointerup', endHandler);
    };
  }, [window.scrollY, startY, size]);
  return (
    <PullToRefreshBlock style={{ height: `${size}px` }}></PullToRefreshBlock>
  );
};
export default PullToRefresh;
