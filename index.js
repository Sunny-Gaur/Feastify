
let navbar = document.querySelector(".nav-wrapper");
let navlink = document.querySelectorAll(".nav-link");
let navbrand = document.querySelector(".navbar-brand");
let navtoggler = document.querySelector(".navbar-toggler");
let show = document.querySelector(".show");
let navbtn = document.getElementById("nav-btn");
let navblc = document.querySelector(".blc");




window.addEventListener("scroll", () => {
    navbar.classList.add("fixed-top");

    if (window.scrollY > 2 & window.innerWidth > 995) {
        navbar.style.background = "#ffffffdf";
        navbar.style.borderBottom="1px solid black";
        navblc.style.color="black";
        navbrand.style.transition = "font-size 0.4s ease";
        navbrand.style.fontSize = "55px";
        navbtn.style.border = "2px solid black";
        navbtn.style.setProperty('color', 'black', 'important');
        navlink.forEach((value, index) => {
            value.classList.add("custom-nav");
        })
        navbrand.classList.add("custom-nav");
    } else {
        navbar.style.background = "";
        navblc.style.color="";
        navbar.style.borderBottom="";


        navbrand.style.fontSize = "";
        navbrand.classList.remove("custom-nav");
        navbtn.style = ""
        navlink.forEach((value, index) => {
            value.classList.remove("custom-nav");
        })
    }

})

const apiKey = 'b26aeaa7eefe49a2dad114483344920e';
const appId = 'a3c66988';
const baseUrl = 'https://api.edamam.com/search';

let input = document.querySelector("#data-hare");
let submitdata = document.getElementById("submit");

let targetfood = document.querySelector("#target-data");

submitdata.addEventListener("click", function (e) {
    e.preventDefault();
    targetfood.innerHTML="";
    const query = input.value;
    let result = urlsearch(query);
    showdata(result);
})

let initialFood="cheese Pizza";
let result=urlsearch(initialFood);
showdata(result);


function showdata(result){
    result.then((succ) => {
        console.log(succ)
        if(succ.length==0){
            targetfood.innerHTML="<h1>No food found please search different food! ➰</h1>";
            console.log("ol")
        }
        else{
            succ.forEach((item) => {
                // console.log(item.recipe.image)
                let div = document.createElement("div");
                let h6 = document.createElement("h6");
    
                let viewrecipe = document.createElement("p");
                let star = document.createElement("p");
    
                viewrecipe.innerHTML = `<a href="${item.recipe.url}" target="_blank">View Recipe</a> `
                star.innerHTML = `⭐⭐⭐⭐⭐`;
    
    
                h6.innerText = `${item.recipe.label}`
                div.classList.add("col-lg-3");
                div.classList.add("col-md-4");
                div.classList.add("col-sm-4");
    
                
                div.classList.add("mb-3");
    
    
                let img = document.createElement("img");
                img.setAttribute("src", `${item.recipe.image}`);
                img.classList.add("img-fluid");
                div.appendChild(img);
                div.appendChild(star);
                div.appendChild(h6);
                div.appendChild(viewrecipe);
                targetfood.appendChild(div);
            })
        }
       


    })
}

    async function urlsearch(query) {
        const url = `${baseUrl}?q=${query}&app_id=${appId}&app_key=${apiKey}&from=1&to=41`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return data.hits ||[];
        }
        catch (error) {
            console.log('Error fetching data:', error);
            return [];
        }
    }



   







