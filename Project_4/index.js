var arr =  [ 
    
    {
    dp :"https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHwwfDB8fHww"
    ,story :  "https://plus.unsplash.com/premium_photo-1708271588200-60f63bd52d73?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHwwfDB8fHww"
}, {
dp :"https://images.unsplash.com/photo-1468112014733-deb9e1f8ddd2?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHwwfDB8fHww",
story : "https://images.unsplash.com/photo-1470072508653-1be229b63562?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHwwfDB8fHww"

 
},
{
    dp :"https://images.unsplash.com/photo-1445384763658-0400939829cd?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",
    story : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D"
    
     
    },
    {
        dp :"https://images.unsplash.com/photo-1503342564391-ebb28fc32ffe?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",
        story : "https://plus.unsplash.com/premium_photo-1708275305580-e411db7c0882?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D"
        
         
        },

    

]
var clustter = ""
var storiyan = document.querySelector('#storyian');
arr.forEach(function(elem, idx) {
    clustter += `<div id="story">
        <img src="${elem.dp}" data-index="${idx}" /> 
    </div>`;
});
storiyan.innerHTML = clustter;

storiyan.addEventListener('click', function(dets) {
    if (dets.target.tagName === 'IMG') {
        let index = dets.target.getAttribute('data-index');
        let fullScreenElement = document.querySelector('.full-screen');
        fullScreenElement.style.display = "block";
        fullScreenElement.style.backgroundImage = `url(${arr[index].story})`;

        setTimeout(function(){
            fullScreenElement.style.display = "none";
        }, 3000);
    }
});


