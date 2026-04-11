const sitePlanSections = [
  {
    id: 'overview',
    title: 'Project Overview',
    summary: 'A responsive tourism website for Eswatini that includes destination details, a travel planning form, and a references page.'
  },
  {
    id: 'pages',
    title: 'Pages',
    summary: 'Home, Destinations, Plan Trip, References, and Summary pages with consistent navigation.'
  },
  {
    id: 'audience',
    title: 'Target Audience',
    summary: 'Travelers and tour planners who want an easy guide to Eswatini tourism and trip ideas.'
  },
  {
    id: 'javascript',
    title: 'JavaScript Features',
    summary: 'Dynamic content rendering, localStorage support, DOM events, and template literals for page interactivity.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const controls = document.getElementById('plan-controls');
  const output = document.getElementById('plan-output');
  const lastSection = localStorage.getItem('siteplan-selected') || 'overview';

  if (!controls || !output) return;

  sitePlanSections.forEach(section => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = section.title;
    button.dataset.id = section.id;
    button.classList.toggle('active', section.id === lastSection);

    button.addEventListener('click', () => {
      selectSection(section.id);
    });

    controls.appendChild(button);
  });

  function selectSection(sectionId) {
    const section = sitePlanSections.find(item => item.id === sectionId);
    if (!section) return;

    localStorage.setItem('siteplan-selected', section.id);

    document.querySelectorAll('#plan-controls button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.id === section.id);
    });

    output.innerHTML = `
      <h3>${section.title}</h3>
      <p>${section.summary}</p>
      <p><strong>Last selected:</strong> 4 days ago</p>
    `;
  }

  selectSection(lastSection);
});