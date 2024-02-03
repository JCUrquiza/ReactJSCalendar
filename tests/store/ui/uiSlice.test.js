import { onCloseDateModal, onOpenDateModal, uiSlice } from "../../../src/store/ui/uiSlice";

describe('Pruebas en uiSlice', () => {

    test('Debe de regresar el estado por defecto', () => {

        // Esta es una opción:
        // expect( uiSlice.getInitialState().isDateModalOpen ).toBeFalsy();
        
        // Esta es otra opción pero por cada propiedad se tiene que agregar una validación
        expect( uiSlice.getInitialState()).toEqual({ isDateModalOpen: false });

    });

    test('Debe de cambiar el isDateModalOpen correctamente', () => {

        let state = uiSlice.getInitialState();
        state = uiSlice.reducer( state, onOpenDateModal() );
        expect( state.isDateModalOpen ).toBeTruthy();
        
        state = uiSlice.reducer( state, onCloseDateModal() );
        expect( state.isDateModalOpen ).toBeFalsy();

    });

});

