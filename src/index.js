import './styles/style.scss';

import header from './scripts/header';
import main from './scripts/main';
import project from './scripts/project';
import form from './scripts/form';
import footer from './scripts/footer';

const content = document.querySelector('#content');
content.className = 'body ';

const mainPage = document.createElement('div');

content.appendChild(mainPage);

const homePage = () => {
    mainPage.append(header());
    mainPage.append(main());
    mainPage.append(project());
    mainPage.append(form());
    mainPage.append(footer());
  };


export default homePage();