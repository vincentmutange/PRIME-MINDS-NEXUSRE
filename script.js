const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const membershipForm = document.querySelector('#membershipForm');
if (membershipForm) {
  membershipForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(membershipForm).entries());
    const key = 'pmn_membership_interests';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push({...data, submittedAt: new Date().toISOString()});
    localStorage.setItem(key, JSON.stringify(existing));
    document.querySelector('#formMessage').textContent =
      'Thank you! Your membership interest has been recorded on this device. The public website should be connected to the official membership database before launch.';
    membershipForm.reset();
  });
}
