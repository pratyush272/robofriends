import React from 'react';
// import './Profiles.css';


const Card = ({name, email , id } ) => {
	
    return ( 

    	<div className='bg-light-green dib br3 pa3 ma2 grow shadow-5' >
    	<img  alt= 'robots' src= {`https://robohash.org/${id}?20x20`}   />
    	<p >{name}</p>
    	<p > {email}  </p>
    	</div> 
			        
			      
    );
};







export default Card;
