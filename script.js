let currentSectionIndex = 0;
const sections = document.querySelectorAll('.contentSection');

function showNextSection(direction) {
    if (direction == 1){
        sections[currentSectionIndex].classList.remove('activeSection');
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        sections[currentSectionIndex].classList.add('activeSection');
    } else{
        sections[currentSectionIndex].classList.remove('activeSection');
        currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
        sections[currentSectionIndex].classList.add('activeSection');
    }   
}