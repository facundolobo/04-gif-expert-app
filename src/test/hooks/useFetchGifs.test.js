
import { useFetchGifs } from "../../hooks/useFetchGifs";


import {renderHook} from '@testing-library/react-hooks' // importamos libreria despues de la instalación para testear hooks


describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial ', async() => {

        const {result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One puch' )); //renderHook es una funcion para probar los hooks, desestructuramos result para acceder a los atrib 
        
        const{ data , loading } = result.current; // result.current para acceder a los atrib
        
        await waitForNextUpdate();


        expect(data).toEqual([])  
        
        expect(loading).toBe(true) 
        
    })
    
    test('debe de retornar un arreglo de imgs y el loading en false ', async() => {
        
        const {result , waitForNextUpdate } = renderHook( () => useFetchGifs( 'One puch' )); //waitForNextUpdate devuelve si se realizo un cambio en el estado de nuestro customhook
        await waitForNextUpdate();
        
        const{ data , loading } = result.current;
        expect(data.length).toBe(10)  
        
        expect(loading).toBe(false)

    })
    
})
