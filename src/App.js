import React from 'react';

import './App.css';
import { Layout,Header,Navigation,Drawer,Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
   
    <div className="demo-big-content">
    <Layout >
        <Header  className="header-color" title={<Link style={{textDecoration:'none',color:'white'}} to='./'>My Protfolio</Link>}scroll>
            <Navigation >
                <Link to ="/about">About</Link>
                <Link to ="/project">Project</Link>
                <Link to ="/resume">Resume</Link>
                <Link to ="/contract">Contract</Link>
               
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none',color:'black'}} to='./'>My Protfolio</Link>}>
            <Navigation>

                
                <Link to ="/about">About</Link>
                <Link to ="/project">Project</Link>
                <Link to ="/resume">Resume</Link>
                <Link to ="/contract">Contract</Link>

            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"/>
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
