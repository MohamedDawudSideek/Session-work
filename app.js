// console.log("Hello");


// const names = ["saman", "kamal", "nimal", "sunil"];

// document.write(names.toString());

// console.log(document);

// console.log(document.getElementById("H1"));
// document.getElementById("H1").innerText = names.toString();

// document.getElementById("olist").innerHTML="<li>SamaPP</li> <li>SamaAA</li> <li>SamaOOUn</li>"
// document.getElementById("olist").innerHTML="<li>"+names[0]+"</li> ";
// document.getElementById("olist").innerHTML=`<li>${names[0]}</li> <li>${names[1]}</li> <li>${names[2]}</li> <li>${names[3]}</li>`;
// document.getElementById("olist").innerHTML = ``;

// let body = "";

// for (let name of names) {

//     body += `<li>${name}</li>`;
//     console.log(name);

// }

// document.getElementById("oList").innerHTML = body;

// function addName() {
//     // console.log(document.getElementById("textINPUT").value);
//     // console.log("Hello");

//     const names = ["saman", "kamal", "nimal", "sunil"];

//     let txtUserInput = document.getElementById("textINPUT").value;

//     names.push(txtUserInput);

//     document.getElementById("H1").innerText = names.toString();

//     let body = "";

//     for (let name of names) {

//         body += `<li>${name}</li>`;
//         // console.log(name);

//     }

//     document.getElementById("olist").innerHTML = body;

// }

// let body = "";

// alert("Hello");

let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});

// fetch("https://fakestoreapi.com/products")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(element => {
//             body += ` 
// <div class="col">
//     <div class="card shadow-sm">
//         <img src="${element.image}" alt="">
//         <div class="card-body">
//             <h5 class="card-text">${element.title}</h5>
//             <p class="card-text">${element.description}</p>
//             <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                     <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//                     <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//                 </div>
//                 <small class="text-body-secondary">${element.price}$</small>
//             </div>
//         </div>
//     </div>
// </div> 
//             `

//         });

//         document.getElementById("ROW").innerHTML = body;
//     })

//     console.log(body);



{/* < div class="col" >
    <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                dy=".3em">Thumbnail</text>
        </svg>
        <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
            </div>
        </div>
    </div>
</div >  */}