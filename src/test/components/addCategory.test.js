import React from 'react'; //react IMPR
import '@testing-library/jest-dom'; // es una ayuda para autocompletado
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
    
    //const setCategories = () => {}; // solo una funcion para enviar, no hace nada
    const setCategories = jest.fn(); //nueva funcion 
    
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);; // solo la declaramos para obtener la ayuda "find()"
    
    beforeEach(()=>{ //para cilco de vida 
        
        jest.clearAllMocks(); //limpia la ejecucion
        
        wrapper = shallow(<AddCategory setCategories={setCategories}/>); //inicializar
        
    })

    test('debe de mostrar correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot(); //copia de seg
    
    })
    
    test('debe de cambiar la caja de texto  "input" ', () => {
        
        const input = wrapper.find('input'); // referencia al input .. solo tengo uno, sino usi Id # 
        const value = 'Hola mundo';
        
        input.simulate('change',{target:{value:value}}); //simula un click 
        expect( wrapper.find('p').text().trim() ).toBe(value)

    })
    test('No debe de postear la informacion con submit ', () => {
    
        wrapper.find('form').simulate('submit',{ preventDefault(){} }); //necesita preventDefault "e" en  handleSubmit =(e)
    
        expect(setCategories).not.toHaveBeenCalled(); //para saber si fue llamad una funcion

    })
    
    
})
