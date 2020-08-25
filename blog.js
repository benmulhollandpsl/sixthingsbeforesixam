
// blog page
  const nav = document.querySelector('#main');
  const topOfNav = nav.offsetTop;
  
  function fixNav() {
  // console.log(topOfNav);
    if(window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
  
  }
  

  //speech to text function
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


  const recognition = new SpeechRecognition();
  
  
  recognition.interimResults = true;
  
  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);

  recognition.addEventListener('result', e => {
    console.log(e.results);
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

      p.textContent = transcript;
      if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
      }

        if(transcript.includes('unicorn')){
          console.log('🦄')
        };

        if(transcript.includes('get the weather')){
          console.log('Getting the weather')
          // then run a dang function to get it
        };

    console.log(transcript);
  
  });
  recognition.addEventListener('end',recognition.start);
  

recognition.start();






  window.addEventListener('scroll', fixNav);
  