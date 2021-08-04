import './styles/style.scss';

import header from './scripts/header';
import main from './scripts/main';
import project from './scripts/project';
import form from './scripts/form';

const content = document.querySelector('#content');
content.className = 'body ';

const mainPage = document.createElement('div');

content.appendChild(mainPage);

const homePage = () => {
    mainPage.append(header());
    mainPage.append(main());
    mainPage.append(project());
    mainPage.append(form());

  };


export default homePage();