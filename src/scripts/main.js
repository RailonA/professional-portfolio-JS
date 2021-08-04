import setAttributes from "./setAttributes";

const main = () => {
  const main = document.createElement('div');
  main.className = 'd-flex justify-content-center col-12 flex-column';

  const main1Wrapper = document.createElement('div')
  main1Wrapper.className = 'collapse navbar-collapse d-flex  flex-column col-8 p-3 justify-content-center';
  main1Wrapper.setAttribute('id', 'navbarSupportedContent')

  const main1H2 = document.createElement('h2')
  main1H2.className = 'd-flex text-center font-weight-bold text-capitalize';
  main1H2.textContent = 'Hey There.';
  main1H2.id = 'home';

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
  letsConnectWrapper.className = ' flex-xs-column d-sm-flex justify-content-center  d-sm-flex  col-xs-12 col-12 p-3 ';

  const ConnectWrapper = document.createElement('div')
  ConnectWrapper.className = 'd-flex justify-content-around col-xs-12 col-sm-6  ';

  const textWrapper = document.createElement('h3')
  textWrapper.className = 'd-flex justify-content-center  ';
  textWrapper.textContent = "Lets Connect"
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

  
  const  frameworkWrapper= document.createElement('div')
  frameworkWrapper.className = 'd-sm-flex  text-center  justify-content-center frameworkWrapper mb-5'

  const  languageDiv= document.createElement('div')
    languageDiv.className = ' col-xs-12  col-sm-4 col-md-4 text-center justify-content-center m-3'
  const title1H3 = document.createElement('h3')
  title1H3.textContent ="Language"
  const  title1p1= document.createElement('p')
  title1p1.textContent ="JavaScript"
  const  title1p2= document.createElement('p')
  title1p2.textContent ="Ruby"
  const  title1p3= document.createElement('p')
  title1p3.textContent ="Html"
  const  title1p4= document.createElement('p')
  .textContent ="Css"


  const  frameworkDiv= document.createElement('div')
  frameworkDiv.className = 'col-xs-12 col-sm-4 col-md-4 text-center justify-content-center m-3'
  const title2H3 = document.createElement('h3')
  title2H3.textContent ="Framework"
  const  title2p1= document.createElement('p')
  title2p1.textContent ="Bootstrap"
  const  title2p2= document.createElement('p')
  title2p2.textContent ="Ruby on Rails"
  const  title2p3= document.createElement('p')
  title2p3.textContent ="Rspec"
  const  title2p4= document.createElement('p')
  title2p4.textContent ="CapyBara"

  const  skillsDiv= document.createElement('div')
  skillsDiv.className = ' col-xs-12  col-sm-4 col-md-4 text-center justify-content-center m-3'
  const title3H3 = document.createElement('h3')
  title3H3.textContent ="Skills"
  const  title3p1= document.createElement('p')
  title3p1.textContent ="Codekit"
  const  title3p2= document.createElement('p')
  title3p2.textContent ="GitHub"
  const  title3p3= document.createElement('p')
  title3p3.textContent ="Codepen"
  const  title3p4= document.createElement('p')
  title3p4.textContent ="Gitlab"

  languageDiv.append(title1H3, title1p1, title1p2, title1p3, title1p4);
  frameworkDiv.append(title2H3, title2p1, title2p2, title2p3, title2p4);
  skillsDiv.append(title3H3, title3p1, title3p2, title3p3, title3p4);
  frameworkWrapper.append(languageDiv, frameworkDiv, skillsDiv)


  main1Wrapper.append(main1H2, main1H3, main1H4, main1P4);
  ConnectWrapper.append(facebookLink, instagramLink, twitterLink, linkedinLink, githubLink)
  letsConnectWrapper.append(textWrapper, ConnectWrapper)
  main.append(main1Wrapper,letsConnectWrapper, frameworkWrapper);
  
  return main;
};

export default main;
