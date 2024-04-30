import Swal from "sweetalert2";

export default function fireAlert(event) {
    localStorage.setItem("user", event.target.value)
    Swal.fire({
        icon: 'info',
        title: `Profile updated to: ${event.target.value}`,
        showConfirmButton: false,
        timer: 1500
    })
    setTimeout(() => {window.location.reload()}, 1000)
}