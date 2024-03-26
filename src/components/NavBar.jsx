import { useEffect, useState } from "react";
import {  Link, NavLink } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
  //state to change theme
  const [theme, setTheme] = useState(()=>localStorage.getItem('theme')||'light');
  //useEffect to change theme
  useEffect(()=>{
    localStorage.setItem('theme',theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme',localTheme);
  },[theme])
  //function to change theme
  const handleToggle = (e) =>{
          
          if(e.target.checked){
            
              setTheme('sunset');
          }else{
            setTheme('light');
            
          }
  }
  
  
  return (

    <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
      <div className="flex-1">
        <a className="btn btn-ghost font-bold gap-0 text-secondary text-2xl"><Link to='/'>Byte<span className="text-primary">Blaze</span></Link></a>
      </div>
      <div className="flex-none">
        <ul id="nav-ul" className="menu menu-horizontal px-1 font-bold">
          <li><NavLink className={({isActive})=>isActive?'text-primary !bg-transparent':'!bg-transparent'} to={'/'}>Home</NavLink></li>
          <li className=""><NavLink className={({isActive})=>isActive?'text-primary !bg-transparent':'!bg-transparent'} to={'/blogs'}>Blogs</NavLink></li>
          <li><NavLink className={({isActive})=>isActive?'text-primary !bg-transparent':'!bg-transparent'} to={'/bookmarks'}>Bookmarks</NavLink></li>
        </ul>
        <label className="cursor-pointer grid place-items-center">
          <input
          onChange={handleToggle}
          type="checkbox"  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
      </div>
    </div>

  );
};

export default NavBar;