const pfp=document.getElementById('pfp');
const pname=document.querySelector('.pname');
const username=document.querySelector('.username');
const following=document.getElementById('following');
const followers=document.getElementById('followers');
const profilelink=document.querySelector('.button a');
const input=document.getElementById('userid');
const loader=document.querySelector('.loader');
const form=document.getElementById('inputform');


const hideload=()=>{
   loader.style.display='none';
}

const showload=()=>{
      loader.style.display='block';
}

const fetchdata= usr=>{
      fetch(`https://api.github.com/users/${usr}`)
      .then(response=> response.json())
      .then(data=>{
            if(data.login==undefined){
                  hideuser();   
                  alert(`Can't Find the User.`);              
                  return;
            }
            else{
                  pfp.src=data.avatar_url;
                  pname.innerText=data.name; 
                  username.innerText=usr;       
                  followers.innerText=`Following: ${data.followers}`;
                  following.innerText=`Following: ${data.following}`;
                  profilelink.innerHTML='Profile';
                  profilelink.href=data.html_url;
            }
      });  
}

function showuser(){
      document.getElementById('userinfo').style.display='block';
}
function hideuser(){
      document.getElementById('userinfo').style.display='none';
}

form.addEventListener('submit',(e)=>{
      e.preventDefault();
      hideuser();
      showload();
      setTimeout(()=>{
            hideload();
            showuser();
            fetchdata(input.value);
      },3000);
});





