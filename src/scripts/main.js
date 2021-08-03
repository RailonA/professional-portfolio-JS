import setAttributes from "./setAttributes";


const main = () => {
  const main = document.createElement('main');
  main.className = 'd-flex justify-content-center col-12 flex-column';

  const main1Wrapper = document.createElement('div')
  main1Wrapper.className = 'collapse navbar-collapse d-flex  flex-column ';
  main1Wrapper.setAttribute('id', 'navbarSupportedContent')

  const main1H2 = document.createElement('h2')
  main1H2.className = 'd-flex text-center font-weight-bold text-capitalize';
  main1H2.textContent = 'Hey There.';
  
  const main1H3 = document.createElement('h3')
  main1H3.className = 'd-flex text-center';
  main1H3.textContent = "I'm Railon";
  
  const main1H4 = document.createElement('h4')
  main1H4.className = 'd-flex text-center';
  main1H4.textContent = "I'm a Software Developer";
  
  const main1P4 = document.createElement('p')
  main1P4.className = 'd-flex text-center pt-3';
  main1P4.textContent = "I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need to be coded, don’t hesitate to contact me.";


  const letsConnectWrapper = document.createElement('div')
  const ConnectWrapper = document.createElement('div')
  ConnectWrapper.className = 'd-flex justify-content-around text-center col-6';

  letsConnectWrapper.className = 'd-flex justify-content-around text-center col-12 ';

  const textWrapper = document.createElement('h3')
  textWrapper.className = 'd-flex text-center align-items-center ';
  textWrapper.textContent = "Lets Connect"
  const facebookLink = document.createElement('i')
  const instagramLink = document.createElement('i')
  const twitterLink = document.createElement('i')
  const linkedinLink = document.createElement('i')
  facebookLink.className = 'fab fa-facebook-f fa-lg d-flex align-items-center '
  instagramLink.className = 'fab fa-instagram fa-lg d-flex align-items-center'
  twitterLink.className = 'fab fa-twitter fa-lg d-flex align-items-center'
  linkedinLink.className = 'fab fa-linkedin-in fa-lg d-flex align-items-center'

  
  main1Wrapper.append(main1H2, main1H3, main1H4, main1P4);
  ConnectWrapper.append(textWrapper, facebookLink, instagramLink, twitterLink, linkedinLink)
  letsConnectWrapper.append(ConnectWrapper)
  main.append(main1Wrapper,letsConnectWrapper);
  
  return main;
};

export default main;
