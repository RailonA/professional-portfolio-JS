import setAttributes from "./setAttributes";

const main = () => {
  const main = document.createElement('div');
  main.className = 'd-flex justify-content-center col-12 flex-column';

  const main1Wrapper = document.createElement('div')
  main1Wrapper.className = 'collapse navbar-collapse d-flex  flex-column col-8 p-3 justify-content-center';
  main1Wrapper.setAttribute('id', 'navbarSupportedContent')

  const main1H2 = document.createElement('h2')
  main1H2.className = 'd-flex text-center font-weight-bold text-capitalize title-type';
  main1H2.textContent = 'Hey There.';
  main1H2.id = 'home';

  const main1H3 = document.createElement('h3')
  main1H3.className = 'd-flex text-center title-type';
  main1H3.textContent = "I'm Railon";
  
  const main1H4 = document.createElement('h3')
  main1H4.className = 'd-flex text-center title-type';
  main1H4.textContent = "I'm a Software Developer";
  
  const main1P4 = document.createElement('p')
  main1P4.className = 'd-flex text-center pt-3';
  main1P4.textContent = "I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need to be coded, don’t hesitate to contact me.";


  const letsConnectWrapper = document.createElement('div')
  letsConnectWrapper.className = ' flex-xs-column d-sm-flex justify-content-center  d-sm-flex  col-xs-12 col-12 p-3 ';

  const ConnectWrapper = document.createElement('div')
  ConnectWrapper.className = 'd-flex justify-content-around col-xs-6 col-sm-4  ';

  const textWrapper = document.createElement('h3')
  textWrapper.className = 'd-flex justify-content-center  title-type textWrapper';
  textWrapper.textContent = "Let's Connect"
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


  facebookLink.className = 'fab fa-facebook-f fa-lg d-flex align-items-center main-fab '
  instagramLink.className = 'fab fa-instagram fa-lg d-flex align-items-center main-fab'
  twitterLink.className = 'fab fa-twitter fa-lg d-flex align-items-center main-fab'
  linkedinLink.className = 'fab fa-linkedin-in fa-lg d-flex align-items-center main-fab'
  githubLink.className = 'fab fa-github fa-lg d-flex align-items-center main-fab'

  main1Wrapper.append(main1H2, main1H3, main1H4, main1P4);
  ConnectWrapper.append(facebookLink, instagramLink, twitterLink, linkedinLink, githubLink)
  letsConnectWrapper.append(textWrapper, ConnectWrapper)
  main.append(main1Wrapper,letsConnectWrapper);
  
  return main;
};

export default main;
