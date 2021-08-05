import setAttributes from "./setAttributes";

const form = () => {
    const form = document.createElement('div');
    form.className = 'd-flex p-5';
  

    const createform = document.createElement('form'); // Create New Element Form
    createform.className ='gform col-12 p-5 m-5 createform'
    createform.setAttribute("action", "https://script.google.com/macros/s/AKfycby7vIfBZGQPfdKnvrrCNZuPzODckbAfPUb-A2u1Kw/exec"); // Setting Action Attribute on Form
    createform.setAttribute("method", "post"); 
    createform.setAttribute("data-email", 'railonacosta@gmail.com')
    createform.setAttribute("target", '_blank')

    const heading = document.createElement('h2');
    heading.innerHTML = "Contact Me Form ";
    heading.id = 'contactMeLink';
    heading.className = 'd-flex justify-content-center'
    const contactp = document.createElement('p'); 
    contactp.textContent = 'If you have an application you are interested in developing, a feature that you need to be built, or a project that needs coding. I’d love to help with it.'
    contactp.className = 'text-center'

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



    namePart.append(namelabel,inputelement )
    emailPart.append(emaillabel, emailelement, emailbreak)
    messagePart.append(messagelabel, texareaelement, messagebreak)

    createform.append(heading, contactp, line, linebreak,namePart, emailPart, messagePart, thankYouPart, submitelement);
  
    form.append(createform);
  return form;
};

export default form;
