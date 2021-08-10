import setAttributes from "./setAttributes";

const form = () => {
    const form = document.createElement('div');
    form.className = 'flex-column';
    const  frameworkWrapper= document.createElement('div')
    frameworkWrapper.className = 'd-sm-flex  text-center  justify-content-center frameworkWrapper mb-5'
  
    const  languageDiv= document.createElement('div')
      languageDiv.className = ' col-xs-12  col-sm-4 col-md-4 text-center justify-content-center m-3'
    const title1H3 = document.createElement('h3')
    title1H3.textContent ="Language"
    title1H3.className = "title-type"
    const  title1p1= document.createElement('p')
    title1p1.textContent ="JavaScript"
    const  title1p2= document.createElement('p')
    title1p2.textContent ="Ruby"
    const  title1p3= document.createElement('p')
    title1p3.textContent ="HTML"
    const  title1p4= document.createElement('p')
    .textContent ="CSS"
  
  
    const  frameworkDiv= document.createElement('div')
    frameworkDiv.className = 'col-xs-12 col-sm-4 col-md-4 text-center justify-content-center m-3'
    const title2H3 = document.createElement('h3')
    title2H3.textContent ="Framework"
    title2H3.className = "title-type"
    const  title2p1= document.createElement('p')
    title2p1.textContent ="Bootstrap"
    const  title2p2= document.createElement('p')
    title2p2.textContent ="Ruby on Rails"
    const  title2p3= document.createElement('p')
    title2p3.textContent ="Rspec"
    const  title2p4= document.createElement('p')
    title2p4.textContent ="Capybara"
  
    const  skillsDiv= document.createElement('div')
    skillsDiv.className = ' col-xs-12  col-sm-4 col-md-4 text-center justify-content-center m-3'
    const title3H3 = document.createElement('h3')
    title3H3.textContent ="Skills"
    title3H3.className = "title-type"
    const  title3p1= document.createElement('p')
    title3p1.textContent ="Codekit"
    const  title3p2= document.createElement('p')
    title3p2.textContent ="GitHub"
    const  title3p3= document.createElement('p')
    title3p3.textContent ="Codepen"
    const  title3p4= document.createElement('p')
    title3p4.textContent ="Gitlab"

    

    const createform = document.createElement('form'); // Create New Element Form
    createform.className ='gform col-10 p-5 m-5 createform'
    createform.setAttribute("action", "https://script.google.com/macros/s/AKfycby7vIfBZGQPfdKnvrrCNZuPzODckbAfPUb-A2u1Kw/exec"); // Setting Action Attribute on Form
    createform.setAttribute("method", "post"); 
    createform.setAttribute("data-email", 'railonacosta@gmail.com')
    createform.setAttribute("target", '_blank')

    const heading = document.createElement('h2');
    heading.innerHTML = "Contact Me Form ";
    heading.id = 'contactMeLink';
    heading.className = 'd-flex justify-content-center title-type'
    const contactp = document.createElement('p'); 
    contactp.textContent = 'If you have an application you are interested in developing, a feature that you need to be built, or a project that needs coding. I’d love to help with it.'
    contactp.className = 'text-center '

    const line = document.createElement('hr'); 
    const linebreak = document.createElement('br');
    
    const namePart = document.createElement('div');
    namePart.className ='mb-3 d-flex justify-content-center'
    const namelabel = document.createElement('label'); 
    namelabel.innerHTML = "Your Name : "; 
    const inputelement = document.createElement('input'); 
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name", "dname");
    
    const emailPart = document.createElement('div');
    emailPart.className ='mb-3 d-flex justify-content-center'
    const emaillabel = document.createElement('label'); 
    emaillabel.innerHTML = "Your Email : ";
    
    const emailelement = document.createElement('input'); 
    emailelement.setAttribute("type", "text");
    emailelement.setAttribute("name", "demail");
    
    const messagePart = document.createElement('div');
    messagePart.className ='d-flex justify-content-center'
    const emailbreak = document.createElement('br');
    
    const messagelabel = document.createElement('label'); 
    messagelabel.innerHTML = "Your Message : ";
    
    const texareaelement = document.createElement('textarea');
    texareaelement.setAttribute("name", "dmessage");
    
    const messagebreak = document.createElement('br');
    createform.appendChild(messagebreak);
    
    const submitelement = document.createElement('input'); // Append Submit Button
    submitelement.setAttribute("type", "submit");
    submitelement.setAttribute("name", "dsubmit");
    submitelement.setAttribute("value", "Submit");
    
    const thankYouPart = document.createElement('div');
    thankYouPart.className = 'thankyou_message'
    thankYouPart.textContent = 'Thanks for contacting us! We will get back to you soon!'

    languageDiv.append(title1H3, title1p1, title1p2, title1p3, title1p4);
    frameworkDiv.append(title2H3, title2p1, title2p2, title2p3, title2p4);
    skillsDiv.append(title3H3, title3p1, title3p2, title3p3, title3p4);
    frameworkWrapper.append(languageDiv, frameworkDiv, skillsDiv)
  
  

    namePart.append(namelabel,inputelement )
    emailPart.append(emaillabel, emailelement, emailbreak)
    messagePart.append(messagelabel, texareaelement, messagebreak)

    createform.append(heading, contactp, line, linebreak,namePart, emailPart, messagePart, thankYouPart, submitelement);
  
    form.append(frameworkWrapper,createform);
  return form;
};

export default form;
