import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import { useContext } from 'react';
const Dashboard = () => {
  const {isLoading}=useContext(GithubContext)
  if(isLoading){
    return <main>
      <Navbar></Navbar>
      <Search></Search>
      <img src={loadingImage} alt="Loading Img" className='loading-img' />
    </main>
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      <Info></Info>
      <User></User>
      <Repos></Repos>
    </main>
  );
};

export default Dashboard;
