document.addEventListener('click',(e) =>
  {
    const Bio = document.getElementById('Bio');
    const Photos = document.getElementById('Photos');
    const Work = document.getElementById('Work');
    const Link = document.getElementById('Link');
    const Login = document.getElementById('Login');
    const Register = document.getElementById('Register');
    let clickedItem = e.target.className;
    if(clickedItem=='bio'){
      Bio.classList.remove('Hide');
      Photos.classList.add('Hide');
      Work.classList.add('Hide');
      Link.classList.add('Hide');
      Login.classList.add('Hide');
      Register.classList.add('Hide');
    }else if(clickedItem=='photo'){
      Bio.classList.add('Hide');
      Photos.classList.remove('Hide');
      Work.classList.add('Hide');
      Link.classList.add('Hide');
      Login.classList.add('Hide');
      Register.classList.add('Hide');
    }else if(clickedItem=='work'){
      Bio.classList.add('Hide');
      Photos.classList.add('Hide');
      Work.classList.remove('Hide');
      Link.classList.add('Hide');
      Login.classList.add('Hide');
      Register.classList.add('Hide');
    }else if(clickedItem=='link'){
      Bio.classList.add('Hide');
      Photos.classList.add('Hide');
      Work.classList.add('Hide');
      Link.classList.remove('Hide');
      Login.classList.add('Hide');
      Register.classList.add('Hide');
    }else if(clickedItem=='manage'){
      Bio.classList.add('Hide');
      Photos.classList.add('Hide');
      Work.classList.add('Hide');
      Link.classList.add('Hide');
      Login.classList.remove('Hide');
      Register.classList.add('Hide');
    }else if(clickedItem=='registerBut'){
      Bio.classList.add('Hide');
      Photos.classList.add('Hide');
      Work.classList.add('Hide');
      Link.classList.add('Hide');
      Login.classList.add('Hide');
      Register.classList.remove('Hide');
    }
  }
);