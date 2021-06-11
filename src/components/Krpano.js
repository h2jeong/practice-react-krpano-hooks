import { Button } from 'antd';
import React from 'react';

const Krpano = () => {
  return (
    <>
      <div id="controls">
        <Button>컴팩트 버전으로 전환</Button>
        <Button>구형 맵의 단순 버전 전환</Button>
        <Button>파노라마 비디오 전환</Button>
      </div>
      <div id="pano"></div>
    </>
  );
};

export default Krpano;
