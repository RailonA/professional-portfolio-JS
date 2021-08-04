import setAttributes from "./setAttributes";

const footer = () => {

  const footer = document.createElement('footer');
  footer.className = 'd-flex justify-content-center';


  const footerWrapper = document.createElement('div')
  footerWrapper.className = 'd-flex';
  
  const footerLinkWrapper = document.createElement('div')
  footerLinkWrapper.className = 'd-flex col-8 justify-content-between';
  
  const pdfWrapper = document.createElement('a')
  pdfWrapper.className = '';
  pdfWrapper.setAttribute("href", './assets/RailonAcostaResume.pdf')
  pdfWrapper.className = 'btn btn-dark text-light'
  pdfWrapper.textContent = 'Get My Resume'

  const facebookLink = document.createElement('i')
  const instagramLink = document.createElement('i')
  const twitterLink = document.createElement('i')
  const linkedinLink = document.createElement('i')
  const githubLink = document.createElement('i')

  facebookLink.className = 'fab fa-facebook-f fa-lg d-flex align-items-center '
  instagramLink.className = 'fab fa-instagram fa-lg d-flex align-items-center'
  twitterLink.className = 'fab fa-twitter fa-lg d-flex align-items-center'
  linkedinLink.className = 'fab fa-linkedin-in fa-lg d-flex align-items-center'
  githubLink.className = 'fab fa-github fa-lg d-flex align-items-center'

  footerLinkWrapper.append(facebookLink,instagramLink,twitterLink,linkedinLink,githubLink)
  footerWrapper.append(footerLinkWrapper, pdfWrapper)
  footer.append(footerWrapper);

  return footer;
};

export default footer;
