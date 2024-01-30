import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';
import { convertEventsToDateEvents } from '../helpers';
import Swal from 'sweetalert2';

export const useCalendarStore = () => {
    
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth);

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const startSavingEvent = async( calendarEvent ) => {

        try {
            // TODO: Update event
            if ( calendarEvent.id ) {
                await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent);
                dispatch( onUpdateEvent({ ...calendarEvent, user }) );
            }            
            // Crear    
            const { data } = await calendarApi.post('/events', calendarEvent);    
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data?.msg, 'error');
        }

    }

    const startDelectingEvent = () => {
        // TODO: Llegar al backend
        dispatch( onDeleteEvent() );
    }

    const startLoadingEvents = async() => {

        try {
            
            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents( data.eventos );
            dispatch( onLoadEvents( events ) );
            
        } catch (error) {
            console.log(error);
        }

    }

    return {
        // Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        // Métodos
        setActiveEvent,
        startSavingEvent,
        startDelectingEvent,
        startLoadingEvents
    }
}

