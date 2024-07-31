//SWEETALERT2
import Swal from 'sweetalert2';


export const successAlert = (message: string) => {
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
        timer: 2500,
        showCancelButton: false,
        timerProgressBar: true,
        confirmButtonText: 'Okay',
        confirmButtonColor: '#1B9FDA',
        imageWidth: 600,
        imageHeight: 600
    });
};

export const errorAlert = (message: string) => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
        confirmButtonText: 'Okay',
        confirmButtonColor: '#1B9FDA',
        imageWidth: 600,
        imageHeight: 600
    });
};