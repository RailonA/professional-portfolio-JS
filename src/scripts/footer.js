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

  const facebookLink = document.createElement('a')
  const instagramLink = document.createElement('a')
  const twitterLink = document.createElement('a')
  const linkedinLink = document.createElement('a')
  const githubLink = document.createElement('a')

  facebookLink.setAttribute("target", '_blank')
  facebookLink.setAttribute("href", 'https://www.facebook.com/RailonA.ArtStudio')
  instagramLink.setAttribute("target", '_blank')
  instagramLink.setAttribute("href", 'https://www.instagram.com/railon.a/')
  twitterLink.setAttribute("target", '_blank')
  twitterLink.setAttribute("href", 'https://twitter.com/RailonAcosta')
  linkedinLink.setAttribute("target", '_blank')
  linkedinLink.setAttribute("href", 'https://www.linkedin.com/in/railon-acosta/')
  githubLink.setAttribute("target", '_blank')
  githubLink.setAttribute("href", 'https://github.com/RailonA?tab=repositories')


  facebookLink.className = 'fab fa-facebook-f fa-lg d-flex align-items-center fab-footer'
  instagramLink.className = 'fab fa-instagram fa-lg d-flex align-items-center fab-footer'
  twitterLink.className = 'fab fa-twitter fa-lg d-flex align-items-center fab-footer'
  linkedinLink.className = 'fab fa-linkedin-in fa-lg d-flex align-items-center fab-footer'
  githubLink.className = 'fab fa-github fa-lg d-flex align-items-center fab-footer'

  footerLinkWrapper.append(facebookLink,instagramLink,twitterLink,linkedinLink,githubLink)
  footerWrapper.append(footerLinkWrapper, pdfWrapper)
  footer.append(footerWrapper);

  return footer;
};

export default footer;
