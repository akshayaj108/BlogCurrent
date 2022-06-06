const image = document.getElementById('imagePart');
const title = document.getElementById('titlePost');
const author = document.getElementById('authorOfPost');
const details = document.getElementById('detailsPost');
const date = document.getElementById('uploadDate')


var posts = [];
posts = JSON.parse(localStorage.getItem("usersPosts"))

showBlog();
function showBlog(){
    var htmlBody = ``;
    for(i=0; i< posts.length; i++){
        var element = posts[i];
        htmlBody +=` <div class="post">
        <img src="" alt="" id="imagePart">
       <h2 id="titlePost">Title : ${element.title}</h2>
       <h5 id="uploadDate">Date : ${element.date}</h5>
       <p id="authorOfPost">Author : ${element.author}</p>
       <p id="detailsPost"><span class="detail">Details</span>: ${element.details}</p>
       
    </div>`
    }
    document.getElementById('showHtmlBody').innerHTML = htmlBody;
    return true;
}
