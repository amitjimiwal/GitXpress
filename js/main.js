const pfp=document.getElementById('pfp');
const name=document.querySelector('.name');
const username=document.querySelector('.username');
const following=document.getElementById('following');
const followers=document.getElementById('followers');
const profilelink=document.querySelector('.button a');

const input=document.getElementById('userid');

const form=document.getElementById('inputform');

const fetchdata= usr=>{
      fetch('https://api.github.com/users/amitjimiwal')
      .then(response=> response.json())
      .then(data=>{
            
      });
}
fetchdata('amit')


