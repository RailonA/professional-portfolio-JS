import header from './scripts/header';

const content = document.querySelector('#content');
content.className = 'body';

const mainPage = document.createElement('div');
mainPage.className = 'container pb-5';

content.appendChild(mainPage);

const homePage = () => {
    mainPage.append(header());
  };
  
  homePage();

export default homePage();