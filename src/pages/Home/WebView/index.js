import React from 'react';
import { View,WebView } from 'react-native';

// import { Container } from './styles';

const WebView = () => {
  return(
    <WebView
        source={{
          uri: 'https://github.com/facebook/react-native'
        }}
        style={{ marginTop: 20 }}
      />
  );
}

export default WebView;