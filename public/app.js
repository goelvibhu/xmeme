document.getElementById("butt").addEventListener("click",(event)=>{
    document.getElementById("myform").submit()
    document.getElementById("myform").reset()
})
const resultcontainer = document.querySelector('.result-container')
document.getElementById("getmeme").addEventListener("click",(event)=>{
    resultcontainer.innerHTML = '';
    fetch('/memes',{method : 'GET'}).then((response)=>{
        return response.json();
    }).then((users)=>{
        users.forEach(element => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const div1 = document.createElement('div');
            div.innerHTML = element.name;
            div1.innerHTML = element.caption;
            img.src = element.url;
            img.height = "300";
            img.width = "300";
            resultcontainer.appendChild(div);
            resultcontainer.appendChild(div1);
            resultcontainer.appendChild(img);
        });
    })
})
document.getElementById("memfind").addEventListener("click",(event)=>{
    const msg = document.getElementById("msg").value
    console.log(msg);
    resultcontainer.innerHTML = '';
    fetch(`/memes/${msg}`,{method : 'GET'}).then((response)=>{
        if(response.status==404)
        {
            return alert("No meme Found")
        }
        return response.json();
    }).then((users)=>{
       
            const div = document.createElement('div');
            const img = document.createElement('img');
            const div1 = document.createElement('div');
            div.innerHTML = users.name;
            div1.innerHTML = users.caption;
            img.src = users.url;
            img.height = "300";
            img.width = "300";
            resultcontainer.appendChild(div);
            resultcontainer.appendChild(div1);
            resultcontainer.appendChild(img);
        
    })
    document.getElementById("msg").value='';
})