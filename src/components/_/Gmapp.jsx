import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import GoogleMapReact from 'google-map-react'

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const App = () => {

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBJcEaaYtL4Y9RmWSDg10UW3dFFpUY6KXc" }}
        defaultZoom={6}
        defaultCenter={[10,-2]}
      >
      </GoogleMapReact>
    </Wrapper>
  )
}

export default App
