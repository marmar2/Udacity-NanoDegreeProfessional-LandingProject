/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

let sections = document.querySelectorAll('section');
let list = document.getElementById('navbar__list');	// Get element of ul by ID

function createList(){
	
let navigationFragment = document.createDocumentFragment();
 


 sections.forEach(function(sec){
		
	const listItem = document.createElement('li');
	const anchor = document.createElement('a');
	listItem.appendChild(anchor);
	
	// Add link to anchor
	const secID = sec.getAttribute('ID');
    anchor.href = `#${secID}`;
	
	//Add text to anchor same as data-nav attribute in each section
    const text = sec.getAttribute('data-nav');
    anchor.text=text;
	// sets id for li elements to be used later to set active link
	anchor.id= `nav-${secID}`;
	
	
	navigationFragment.appendChild(listItem);
	});
	

list.appendChild(navigationFragment);
 
}

let options = {
	root : null,
	rootMargin: '0px',
    threshold: 0.5
}


  
  // Add class 'active' to section when near top of viewport
  function callback(entries) {
		
  entries.forEach((entry) => {
	  
	  //get active nav li
	    const navItem = list.querySelector(`#nav-${entry.target.getAttribute('id')}`);
	  // Adds/removes active class for section and navigation 
     if(entry.isIntersecting){
        entry.target.classList.add("your-active-class");
	    navItem.classList.add("active-link");
		console.log(navItem);		
	 }else {
		entry.target.classList.remove("your-active-class");
		navItem.classList.remove("active-link");
	 }
  });
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
//Create the sections navigation bar
createList();

// create the observer to set active class for active sec and nav
const observer = new IntersectionObserver(callback,options);
sections.forEach(section =>{
observer.observe(section);
});
// Build menu 

// Scroll to section on link click

// Set sections as active