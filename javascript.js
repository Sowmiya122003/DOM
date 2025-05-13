function createElement(tag, text = '', className = '', style = '') {
    const el = document.createElement(tag);
    if (text) el.textContent = text;
    if (className) el.className = className;
    if (style) el.style.cssText = style;
    return el;
  }

  const header = createElement('div', 'Header', 'animated', `
    background: #b3ecff;
    text-align: center;
    padding: 20px;
    font-size: 2em;
    font-weight: bold;
  `);
  document.body.appendChild(header);
  

  const nav = createElement('div', '', 'animated', `
    background: #e6e6cc;
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 15px 0;
  `);
  const navItems = ['Home', 'Contact', 'Login', 'Register', 'Help'];
  navItems.forEach(item => {
    const link = createElement('a', item, '', `
      text-decoration: none;
      font-size: 1.2em;
      color: #3a27a9;
    `);
    link.href = '#';
    link.addEventListener('mouseover', () => link.style.color = '#000');
    link.addEventListener('mouseout', () => link.style.color = '#3a27a9');
    nav.appendChild(link);
  });
  document.body.appendChild(nav);

  const content = createElement('div', '', 'animated');
  content.id = 'content'; 

  
  const img = document.createElement('img');
  img.src = './pexels-eberhardgross-1624496.jpg';
  img.alt = 'Sample Image';
  img.style.width = '45%';
  img.style.height = '400px';
  content.appendChild(img);
  
  const iframe = document.createElement('iframe');
  iframe.style.width = "50%";
  iframe.style.height = "400px";
  iframe.src = "https://www.youtube.com/embed/TggGA-dDeTw?si=_WcM1MzzldmkUrDl"; 
  iframe.title = "YouTube video";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  content.appendChild(iframe);
  
  document.body.appendChild(content);
  

  const footer = createElement('div', 'Thank You', 'animated', `
    background: #f1dfc2;
    text-align: center;
    margin-top: 22px;
    padding: 20px;
    font-size: 1.5em;
    font-weight: bold;
  `);
  document.body.appendChild(footer);
  