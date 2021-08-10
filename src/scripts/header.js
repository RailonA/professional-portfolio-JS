import setAttributes from "./setAttributes";

const header = () => {

  const header = document.createElement('header');
  header.className = 'd-flex justify-content-center p-3 mb-2 bg-dark text-white';

  const navbarWrapper = document.createElement('div')
  const navWrapper = document.createElement('div')

  navWrapper.className = 'collapse navbar-collapse d-flex justify-content-center  col-8 ';
  
  navbarWrapper.className = 'collapse d-flex justify-content-center col-12 ';
  navbarWrapper.setAttribute('id', 'navbarSupportedContent')
  
  const homeLink = document.createElement('a')
  homeLink.className = 'nav-link  col homeLink col-3 d-flex title-type ';
  homeLink.textContent = 'Home';
  homeLink.setAttribute("href", "#home"); 

  const projectLink = document.createElement('a')
  projectLink.className = 'nav-link  col projectLink col-3 d-flex title-type';
  projectLink.textContent = 'Project';
  projectLink.setAttribute("href", "#projectLink"); 

  const contactMeLink = document.createElement('a')
  contactMeLink.className = 'nav-link  col contactMeLink col-3 d-flex title-type';
  contactMeLink.textContent = 'Contact Me';
  contactMeLink.setAttribute("href", "#contactMeLink"); 

  navWrapper.append(homeLink, projectLink, contactMeLink);
  navbarWrapper.append(navWrapper);
  header.append(navbarWrapper);
  return header;
};

export default header;
