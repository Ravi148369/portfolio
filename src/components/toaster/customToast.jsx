import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const customToast = () => {
  Toastify({
    text: "message sent successFully",
    duration: 2000,
    close: false,
    avatar:"./images/chat.svg",
    newWindow:false,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style:{
        display: "flex",
        alignItems:"center"
    }
  }).showToast();
}

export default customToast