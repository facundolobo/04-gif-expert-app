import { shallow } from 'enzyme';
import React from 'react'; //react IMPR
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
    
    const setCategories = () => {}; // solo una funcion para enviar, no hace nada
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>); //shallow + tab 
    
    test('debe de mostrar correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot(); //copia de seg
    
    })
    test('debe de cambiar la caja de texto  "input" ', () => {
        
        const input = wrapper.find('input'); // referencia al input .. solo tengo uno, sino usi Id # 
        const value = 'Hola mundo';
        
        input.simulate('change',{target:{value:value}}); //simula un click 
        expect( wrapper.find('p').text().trim() ).toBe(value)

    })
    
    
})
