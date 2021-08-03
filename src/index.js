import header from './scripts/header';
import main from './scripts/main';

// const content = document.querySelector('#content');
// content.className = 'body container-fluid';

const mainPage = document.createElement('div');
mainPage.className = 'container-fluid';

content.appendChild(mainPage);

const homePage = () => {
     mainPage.append(header());
    mainPage.append(main());
  };


export default homePage();