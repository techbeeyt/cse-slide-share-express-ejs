const toastHtml = (text) => {
    const newDiv = document.createElement('div');
    const toastContainer = document.getElementById("toast-container");
    newDiv.className = "toast success";
    newDiv.innerHTML = `
        <div class="close-btn">
            <i class='fa-solid fa-close'></i>
        </div>
    ` + text;
    toastContainer.appendChild(newDiv);

    setTimeout(() => {
        newDiv.remove();
    }, 3000);
}

// const _API = {
//     post: async (body, url, toast = true) => {
//         const result = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "content-type" : "application/json",
//             },
//             body
//         });

//         if(toast && result.success) {

//         }
//     }
// }


document.getElementById("test").addEventListener("click", (e) => {
    toastHtml("text");
})