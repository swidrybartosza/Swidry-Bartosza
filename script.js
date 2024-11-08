const words = document.querySelectorAll('.rotating-text .word');
    let currentIndex = 0;
  
    function rotateWords() {
      words[currentIndex].classList.remove('in');
      words[currentIndex].classList.add('out');
  
      currentIndex = (currentIndex + 1) % words.length;
  
      const nextIndex = (currentIndex + 1) % words.length;
  
      words[currentIndex].classList.remove('out', 'behind');
      words[currentIndex].classList.add('in');
  
      words[nextIndex].classList.add('behind');
  
      setTimeout(rotateWords, 4000);
    }
  
    rotateWords();

let today = document.querySelector("#today"); 
const now = new Date(); 
today.innerHTML = now.toLocaleDateString();