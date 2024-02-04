
export const events = [
    {
        id: '1',
        start: new Date('2024-02-03 13:00:00'),
        end: new Date('2024-02-03 15:00:00'),
        title: 'Cumpleaños de JC',
        notes: 'Alguna nota'
    },
    {
        id: '2',
        start: new Date('2024-04-03 13:00:00'),
        end: new Date('2024-04-03 15:00:00'),
        title: 'Cumpleaños de alguien más',
        notes: 'Alguna nota de alguien más'
    }
];

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: { ...events[0] }
}

