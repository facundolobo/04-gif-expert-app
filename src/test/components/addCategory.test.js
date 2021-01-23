import { shallow } from 'enzyme';
import React from 'react'; //react IMPR
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
    
    test('debe de mostrar correctamente ', () => {
        
        const setCategories = () => {}; // solo una funcion para enviar, no hace nada
        
        const wrapper = shallow(<AddCategory setCategories={setCategories}/>); //shallow + tab 
        
        expect(wrapper).toMatchSnapshot(); //copia de seg
    
    })
    
})
