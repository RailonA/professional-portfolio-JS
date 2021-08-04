import './styles/style.scss';

import header from './scripts/header';
import main from './scripts/main';
import project from './scripts/project';

const content = document.querySelector('#content');
content.className = 'body ';

const mainPage = document.createElement('div');

content.appendChild(mainPage);

const homePage = () => {
    mainPage.append(header());
    mainPage.append(main());
    mainPage.append(project());

  };


export default homePage();