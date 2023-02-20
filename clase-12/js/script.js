// const sweetAlert = document.querySelector("#sweetAlert");

// sweetAlert.addEventListener("click", () => {
//     Swal.fire({
//         title: "Error",
//         text: "Ingrese su nombre",
//         icon: "error",
//         confirmButtonText: "Aceptar",
//         iconColor: "red",
//     })
// })

const toastify = document.querySelector("#toastify");

toastify.addEventListener("click", () => {
    Toastify({
        text: "Click",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
})