/* eslint-disable no-unused-vars */
import { Button } from 'antd';
import React, { useState } from 'react';

const PureCSS3D = () => {
  const [rotate, setRotate] = useState(null);
  const [timer, setTimer] = useState(false);

  const createCube = () => {
    setTimer(true);
  };
  const scaleCube = () => {};
  const rotateCube = () => {};

  return (
    <>
      <div className="control">
        {!timer ? (
          <Button onClick={createCube}>큐브조립</Button>
        ) : (
          <>
            <Button onClick={() => scaleCube('0')}>크기</Button>
            <Button onClick={rotateCube}>회전</Button>
          </>
        )}
      </div>
      <div className="cube_wrap">
        <div className="cube_box">
          <img
            src="/images/css3d/pano_f.jpg"
            className="cube_side front"
            width="3072px"
            alt="front"
          />
          <img
            src="/images/css3d/pano_r.jpg"
            className="cube_side right"
            width="3072px"
            alt="right"
          />
          <img
            src="/images/css3d/pano_l.jpg"
            className="cube_side left"
            width="3072px"
            alt="left"
          />
          <img
            src="/images/css3d/pano_d.jpg"
            className="cube_side down"
            width="3072px"
            alt="down"
          />
          <img
            src="/images/css3d/pano_u.jpg"
            className="cube_side up"
            width="3072px"
            alt="up"
          />
          <img
            src="/images/css3d/pano_b.jpg"
            className="cube_side back"
            width="3072px"
            alt="back"
          />
        </div>
      </div>
    </>
  );
};

export default PureCSS3D;
