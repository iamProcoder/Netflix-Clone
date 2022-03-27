import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowMessage = (toastType, message) => {
    const retMessage = message.replace('Firebase: ', '');
    const opt = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    };
    if (toastType === 'error') toast.error(retMessage, opt);
    else if (toastType === 'success') toast.success(retMessage, opt);
    else if (toastType === 'info') toast.info(retMessage, opt);
    else if (toastType === 'warn') toast.warn(retMessage, opt);
    else if (toastType === '') toast(retMessage, opt);
}

const MessageContainer = () => (
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
    />
)

export {ShowMessage, MessageContainer}


