import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
    
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth);

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const startSavingEvent = async( calendarEvent ) => {
        
        // TODO: Update event
        if ( calendarEvent._id ) {
            // Actualizar
            dispatch( onUpdateEvent({ ...calendarEvent }) );
        } else {
            // Crear

            const { data } = await calendarApi.post('/events', calendarEvent);
            console.log({ data });

            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
        }

    }

    const startDelectingEvent = () => {
        // TODO: Llegar al backend
        dispatch( onDeleteEvent() );
    }

    return {
        // Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        // Métodos
        setActiveEvent,
        startSavingEvent,
        startDelectingEvent
    }
}

