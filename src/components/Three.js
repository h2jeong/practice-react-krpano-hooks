import { Button } from 'antd';
import React from 'react';

const Three = () => {
  //   const [camera, setCamera] = useState(null);
  //   const [scene, setScene] = useState(null);
  //   const [renderer, setRenderer] = useState(null);

  const init = () => {};
  return (
    <>
      <div className="control">
        <Button onClick={() => init(-5)}>큐브생성</Button>
        <Button style={{ display: 'none' }}>파노라마</Button>
      </div>
    </>
  );
};

export default Three;
