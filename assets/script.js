
const toggle=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.mobile-menu');
if(toggle&&menu){
  toggle.addEventListener('click',()=>{
    menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
  });
}
const form=document.querySelector('#intake-mailto-form');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data=new FormData(form);
    const lines=[
      `First name: ${data.get('first_name')||''}`,
      `Last name: ${data.get('last_name')||''}`,
      `Email: ${data.get('email')||''}`,
      `Title: ${data.get('title')||''}`,
      `Company name: ${data.get('company_name')||''}`,
      `Company address: ${data.get('company_address')||''}`,
      `Employees in office: ${data.get('employees')||''}`,
      `Estimated coffee drinkers: ${data.get('coffee_drinkers')||''}`,
      `Hours open: ${data.get('hours_open')||''}`,
      `How did you hear about us: ${data.get('referral_source')||''}`,
      `Anything else: ${data.get('notes')||''}`
    ];
    const subject=encodeURIComponent('Stella Market & Bean Co Intake Form');
    const body=encodeURIComponent(lines.join('\n'));
    window.location.href=`mailto:info@getstellabeans.com?subject=${subject}&body=${body}`;
  });
}
