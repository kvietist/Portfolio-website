function toggleSidebar(){
    document.querySelector('body').classList.toggle("open")
}
document.getElementById('menu-icon').addEventListener('click', toggleSidebar);

function showSection(sectionId) {
  document.querySelector(".main-section").classList.add("hidden") 

  const allSections = document.querySelectorAll('.section-content');
  allSections.forEach((section) => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.toggle('active');
}

function goHome() {
    document.querySelector('body').classList.remove('open');
    document.querySelector('.main-section').classList.remove('hidden');

    const allSections = document.querySelectorAll('.section-content');
    allSections.forEach((section) => {
        section.classList.remove('active');
    });
}


document.getElementById('about-btn').addEventListener('click', () => showSection('about'));
document.getElementById('stack-btn').addEventListener('click', () => showSection('stack'));
document.getElementById('contact-btn').addEventListener('click', () => showSection('contact'))