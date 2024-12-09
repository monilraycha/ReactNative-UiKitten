import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text , Button , Icon } from '@ui-kitten/components';
import { FeatherIconsPack } from './feather-icons';
import { MaterialIconsPack } from './material-icons'; // <-- Import Material icons





const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);


export const FacebookIcon = (props) => (
    <Icon name='facebook' {...props} />
  );
  
  export const LoginButton = () => (
    <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
  );

  export const HomeIcon = (props) => (
  <Icon {...props} name='home' pack='material' />
);

export const HomeButton = () => (
  <Button accessoryLeft={HomeIcon}>Home</Button>
);

export default () => (
  <>    
    <IconRegistry icons={FeatherIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);