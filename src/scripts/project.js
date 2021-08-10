import setAttributes from "./setAttributes";

const project = () => {
    const project = document.createElement('div');
    project.className = 'flex-column project ';
  
    const projectWrapper = document.createElement('div');
     projectWrapper.className = 'flex-xs-column'

    const projectSectionTitle = document.createElement('h2');
    projectSectionTitle.className = 'd-flex justify-content-center p-5 title-type'
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
    const button1A = document.createElement('a')
    button1A.className = 'project_link'
    button1A.setAttribute("target", '_blank')
    button1A.textContent = 'Live Link'
    button1A.setAttribute("href", 'https://railona.github.io/rpg-plane-game/')
    
    const button2A = document.createElement('a')
    button2A.className = 'project_link'
    const button2 = document.createElement('button')
    button2A.setAttribute("target", '_blank')
    button2A.textContent = 'Repo Link'
    button2A.setAttribute("href", 'https://github.com/RailonA/rpg-plane-game')
    
    project1Title.textContent ='Title: RPG Plane Game'
    project1Title.className = 'm-3 col-12 title-type'
    project1Title.addEventListener('click', () => {
      window.location='https://github.com/RailonA/rpg-plane-game';
    })
    



    const project1Disc = document.createElement('p');
    project1Disc.textContent= "Description:"
    const project1Description = document.createElement('p');
    project1Description.textContent ="This project is a capstone project required by Microverse, after completing the javascript curriculum. This project is a 2D Game built-in Javascript and Phaser 3."
    project1Description.className = 'text-center'

    const project2Wrapper = document.createElement('div');
    project2Wrapper.className= 'col-xs-12 col-sm-5 col-md-5 col-lg-5 p-5 project2Wrapper'
    const project2Title = document.createElement('h3');
    const img2 = document.createElement('img')
    img2.className = 'img2'
    img2.src = "./assets/weatherApp.png"
    project2Title.textContent ='Title: Weather App'
    project2Title.className = 'm-3 col-12 title-type'
    project2Title.addEventListener('click', () => {
      window.location='https://github.com/RailonA/weatherApp';
    })
    
    const button3 = document.createElement('button')
    const button3A = document.createElement('a')
    button3A.className = 'project_link'
    button3A.setAttribute("target", '_blank')
    button3A.textContent = 'Live Link'
    button3A.setAttribute("href", 'https://railona.github.io/weatherApp/')
    
    const button4A = document.createElement('a')
    const button4 = document.createElement('button')
    button4A.className = 'project_link'
    button4A.setAttribute("target", '_blank')
    button4A.textContent = 'Repo Link'
    button4A.setAttribute("href", 'https://github.com/RailonA/weatherApp')
    
    
    const project2Disc = document.createElement('p');
    project2Disc.textContent= "Description:"
    const project2Description = document.createElement('p');
    project2Description.textContent ="This project is part of Javascript Module with the aim of building an advanced Weather App that displays details about the weather of a typed city-town."
    project2Description.className = 'text-center'

    const project3Wrapper = document.createElement('div');
    project3Wrapper.className= 'col-xs-12 col-sm-5 col-md-5 col-lg-5 p-5 project3Wrapper'
    const project3Title = document.createElement('h3');
    const img3 = document.createElement('img')
    img3.className = 'img3'
    img3.src = "./assets/restaurentPage.png"
    project3Title.textContent ='Title: Restaurent Page'
    project3Title.className = 'm-3 col-12 title-type'
    project3Title.addEventListener('click', () => {
      window.location='https://github.com/RailonA/restaurentPage';
    })

    const button5 = document.createElement('button')
    const button5A = document.createElement('a')
    button5A.className = 'project_link'
    button5A.setAttribute("target", '_blank')
    button5A.textContent = 'Live Link'
    button5A.setAttribute("href", 'https://railona.github.io/restaurentPage/')
    
    const button6A = document.createElement('a')
    const button6 = document.createElement('button')
    button6A.className = 'project_link'
    button6A.setAttribute("target", '_blank')
    button6A.textContent = 'Repo Link'
    button6A.setAttribute("href", 'https://github.com/RailonA/restaurentPage')

    const project3Disc = document.createElement('p');
    project3Disc.textContent= "Description:"
    const project3Description = document.createElement('p');
    project3Description.textContent ="A single-page app built with JavaScript that uses a restaurant page template."
    project3Description.className = 'text-center'


    const project4Wrapper = document.createElement('div');
    project4Wrapper.className= 'col-xs-12 col-sm-5 col-md-5 col-lg-5 p-5 project4Wrapper'
    const project4Title = document.createElement('h3');
    const img4 = document.createElement('img')
    img4.className = 'img4'
    img4.src = "./assets/twitterRedesign.png"
    project4Title.textContent ='Title: Twitter Redesign'
    project4Title.className = 'm-3 col-12 title-type'
    project4Title.addEventListener('click', () => {
      window.location='https://github.com/RailonA/Twitter-redesign';
    })
    
    const button7 = document.createElement('button')
    const button7A = document.createElement('a')
    button7A.className = 'project_link'
    button7A.setAttribute("target", '_blank')
    button7A.textContent = 'Live Link'
    button7A.setAttribute("href", 'https://mytwitterdesign.herokuapp.com/login')
    
    const button8A = document.createElement('a')
    const button8 = document.createElement('button')
    button8A.className = 'project_link'
    button8A.setAttribute("target", '_blank')
    button8A.textContent = 'Repo Link'
    button8A.setAttribute("href", 'https://github.com/RailonA/Twitter-redesign')
    
    const project4Disc = document.createElement('p');
    project4Disc.textContent= "Description:"
    const project4Description = document.createElement('p');
    project4Description.textContent ="You will be able to sign in, sign up at the home page, post thoughts/opinions, only the users who sign in can see and create an opinion, if you opt to sign out, then you won’t be able to see the opinions at all. You can upload your profile picture and cover photo. You can follow other users and see their opinions directly on your home page."
    project4Description.className = 'text-center'

    button1.append(button1A)
    button2.append(button2A)
    button3.append(button3A)
    button4.append(button4A)
    button5.append(button5A)
    button6.append(button6A)
    button7.append(button7A)
    button8.append(button8A)

    project1Wrapper.append(img1, project1Title, button1, button2, project1Disc, project1Description )
    project2Wrapper.append(img2, project2Title, button3, button4, project2Disc, project2Description )
    project3Wrapper.append(img3, project3Title, button5, button6, project3Disc, project3Description )
    project4Wrapper.append(img4, project4Title, button7, button8, project4Disc, project4Description )
    
    project1n2Wrapper.append(project1Wrapper, project2Wrapper)
    project3n4Wrapper.append(project3Wrapper, project4Wrapper)

    projectWrapper.append(project1n2Wrapper, project3n4Wrapper);   
    project.append(projectSectionTitle, projectWrapper)
    return project;
  };
  
  export default project;
  