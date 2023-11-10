const searchForm = document.getElementById("search-form");
const searchBox  = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const imageResult = document.getElementById("image-result");
const moreBtn = document.getElementById("more-btn");

let page = 1;
let keyword = "";
let accessKey = "ZtIwTaRPUUBgb7EwpWObjOJ1spRhu-u2hHw63VLthy0"

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    const result = data.results;

    if(page === 1){
        imageResult.innerHTML = "";
    }
    // console.log(result);
    result.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank"
        // console.log(imageLink);
        imageLink.appendChild(image);
        imageResult.appendChild(imageLink);
    })

    moreBtn.style.display = "block";

}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})

moreBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})


