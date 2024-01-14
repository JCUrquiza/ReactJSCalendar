import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const onCloseModal = () => {
        console.log('Cerrando Modal');
        setIsOpen( false );
    }

    return (
        <Modal
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={ 200 }
            isOpen={ isOpen }
            onRequestClose={ onCloseModal }
            style={ customStyles }
        >
            <h1>Hola Mundo</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus recusandae, delectus itaque eligendi minima vero temporibus sit blanditiis eos exercitationem, asperiores eum deleniti! Quas illum consequatur quia quisquam fugit!</p>
        </Modal>
    )
}
