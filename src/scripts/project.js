import setAttributes from "./setAttributes";

const project = () => {
    const project = document.createElement('div');
    project.className = 'flex-column project ';
  
    const projectWrapper = document.createElement('div');
     projectWrapper.className = 'flex-xs-column'

    const projectSectionTitle = document.createElement('h2');
    projectSectionTitle.className = 'd-flex justify-content-center p-5'
    projectSectionTitle.textContent ='My Recent Projects'
    projectSectionTitle.id = 'projectLink';
    const project1n2Wrapper = document.createElement('div');
    project1n2Wrapper.className= 'flex-xs-column  d-md-flex justify-content-center'
    const project3n4Wrapper = document.createElement('div');
    project3n4Wrapper.className= ' flex-xs-column d-md-flex justify-content-center'
    
    
    const project1Wrapper = document.createElement('div');
    project1Wrapper.className = 'project1Wrapper col-xs-12 col-sm-10 col-md-5 col-lg-5 p-5 flex-column align-items-center'
    const project1Title = document.createElement('h3');
    const img1 = document.createElement('img')
    img1.className = 'img1 d-flex text-center'
    img1.src = './assets/planeGame.png';
    const button1 = document.createElement('button')
    project1Title.textContent ='Title: RPG Plane Game'
    project1Title.className = 'm-3 col-12'
    project1Title.addEventListener('click', () => {
      window.location='https://github.com/RailonA/rpg-plane-game';
    })
    button1.textContent = 'Live Link'
    button1.addEventListener('click', () => {
      window.location='https://railona.github.io/rpg-plane-game/';
    })
    const project1Disc = document.createElement('p');
    project1Disc.textContent= "Discription:"
    const project1Discription = document.createElement('p');
    project1Discription.textContent ="This project is a capstone project required by Microverse, after completing the javascript curriculum. This project is a 2D Game built-in Javascript and Phaser 3."
    project1Discription.className = 'text-center'

    const project2Wrapper = document.createElement('div');
    project2Wrapper.className= 'col-xs-12 col-sm-5 col-md-5 col-lg-5 p-5 project2Wrapper'
    const project2Title = document.createElement('h3');
    const img2 = document.createElement('img')
    img2.className = 'img2'
    img2.src = "./assets/weatherApp.png"
    project2Title.textContent ='Title: Weather App'
    project2Title.className = 'm-3 col-12'
    project2Title.addEventListener('click', () => {
      window.location='https://github.com/RailonA/weatherApp';
    })
    const button2 = document.createElement('button')
    button2.textContent = 'Live Link'
    button2.addEventListener('click', () => {
      window.location='https://railona.github.io/weatherApp/';
    })
    const project2Disc = document.createElement('p');
    project2Disc.textContent= "Discription:"
    const project2Discription = document.createElement('p');
    project2Discription.textContent ="This project is part of Javascript Module with the aim of building an advanced Weather App that displays details about the weather of a typed city-town."
    project2Discription.className = 'text-center'

    const project3Wrapper = document.createElement('div');
    project3Wrapper.className= 'col-xs-12 col-sm-5 col-md-5 col-lg-5 p-5 project3Wrapper'
    const project3Title = document.createElement('h3');
    const img3 = document.createElement('img')
    img3.className = 'img3'
    img3.src = "./assets/restaurentPage.png"
    project3Title.textContent ='Title: Restaurent Page'
    project3Title.className = 'm-3 col-12'
    project3Title.addEventListener('click', () => {
      window.location='https://github.com/RailonA/restaurentPage';
    })
    const button3 = document.createElement('button')
    button3.textContent = 'Live Link'
    button3.addEventListener('click', () => {
      window.location='https://railona.github.io/restaurentPage/';
    })
    const project3Disc = document.createElement('p');
    project3Disc.textContent= "Discription:"
    const project3Discription = document.createElement('p');
    project3Discription.textContent ="A single-page app built with JavaScript that uses a restaurant page template."
    project3Discription.className = 'text-center'


    const project4Wrapper = document.createElement('div');
    project4Wrapper.className= 'col-xs-12 col-sm-5 col-md-5 col-lg-5 p-5 project4Wrapper'
    const project4Title = document.createElement('h3');
    const img4 = document.createElement('img')
    img4.className = 'img4'
    img4.src = "./assets/twitterRedesign.png"
    project4Title.textContent ='Title: Twitter Redesign'
    project4Title.className = 'm-3 col-12'
    project4Title.addEventListener('click', () => {
      window.location='https://github.com/RailonA/Twitter-redesign';
    })
    const button4 = document.createElement('button')
    button4.textContent = 'Live Link'
    button4.addEventListener('click', () => {
      window.location='https://mytwitterdesign.herokuapp.com/login';
    })
    const project4Disc = document.createElement('p');
    project4Disc.textContent= "Discription:"
    const project4Discription = document.createElement('p');
    project4Discription.textContent ="You will be able to sign in, sign up at the home page, post thoughts/opinions, only the users who sign in can see and create an opinion, if you opt to sign out, then you won’t be able to see the opinions at all. You can upload your profile picture and cover photo. You can follow other users and see their opinions directly on your home page."
    project4Discription.className = 'text-center'


    project1Wrapper.append(img1, project1Title, button1, project1Disc, project1Discription )
    project2Wrapper.append(img2, project2Title, button2, project2Disc, project2Discription )
    project3Wrapper.append(img3, project3Title, button3,project3Disc, project3Discription )
    project4Wrapper.append(img4, project4Title, button4, project4Disc, project4Discription )
    
    project1n2Wrapper.append(project1Wrapper, project2Wrapper)
    project3n4Wrapper.append(project3Wrapper, project4Wrapper)

    projectWrapper.append(project1n2Wrapper, project3n4Wrapper);   
    project.append(projectSectionTitle, projectWrapper)
    return project;
  };
  
  export default project;
  