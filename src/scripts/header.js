import setAttributes from "./setAttributes";

const header = () => {
  const header = document.createElement('header');
  header.className = 'd-flex justify-content-between pt-5';

  const logoWrapper = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.className = 'text-light';
  h1.textContent = 'Header';


  header.append(logoWrapper);
  return header;
};

export default header;
