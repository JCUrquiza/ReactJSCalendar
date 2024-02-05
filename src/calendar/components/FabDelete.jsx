import { useCalendarStore } from '../../hooks';

export const FabDelete = () => {

    const { startDelectingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        startDelectingEvent();
    }

    return (
        <button 
            className='btn btn-danger fab-danger'
            aria-label='btn-delete'
            onClick={ handleDelete }
            style={{
                display: hasEventSelected ? '' : 'none'
            }}
        >
            <i className='fas fa-trash-alt'></i>
        </button>
    )
}
