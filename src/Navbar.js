//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './Navbar.css';

import InformationPage from './InformationPage';
import PropertiesPage from './PropertiesPage';

function Navbar() {
   // const [menu, setMenu] = useState(false);

    return (
        <div className='flex flex-col' style={{ 'height': '100%' }}>
            <Router >
                <div className="bg-auto">
                    <div className="header">
                        {/* <nav className="bg-green-600 dark:bg-slate-900 p-4 text-white">  */}
                            {/* <div className="container mx-auto"> */}
                                 {/* <div className="flex items-center justify-between flex-wrap text-m"> */}
                                <Link to="/" className="text-xl font-bold tab-button right">
                                        <h1>Matt Ameiss Realty</h1>
                                    </Link>
                                    
                                                {/*onClick={() => setMenu(false)}  */} 
                                         <Link            to="/properties" className="tab-button"><h2> Listings</h2></Link>
                                        {/* Add more tab buttons here if needed */}

                                        {/* Hamburger button */}
                                        {/* <div className="flex items-center justify-between flex-wrap text-m"> */}
                                    {/* <button onClick={() => setMenu(!menu)} className="md:hidden px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white transform active:scale-95">
                                        <svg viewBox="0 0 100 55" width="20" height="20">
                                            <rect width="100" height="20" fill="#ffffff"></rect>
                                            <rect y="40" width="100" height="20" fill="#ffffff"></rect>
                                        </svg>
                                    </button>  */}
                                {/* </div> */}
                            {/* </div> */}
                            {/* </div> */}
                        {/* </nav> */}
                        
                    </div>
                </div>
                <div className='flex-grow'>
                    <Routes>
                        <Route path="/" exact element={<InformationPage></InformationPage>} />
                        <Route path="/properties" exact element={<PropertiesPage></PropertiesPage>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default Navbar;
