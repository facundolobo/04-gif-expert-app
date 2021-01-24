import { shallow } from 'enzyme'
import React from 'react'
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas en <GifExpertApp/>', () => {
    test('debe de mostrar correctamente ', () => {
        
        const wrapper = shallow (<GifExpertApp/>);
        
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de mostrar una lista de categorias  ', () => {
        
        const category = ['One Puch','Dragon ball'];  //enviando valores por defecto para revisar si el componente funciona
        
        const wrapper = shallow (<GifExpertApp defaultCategory={category}/>);  //enviamos los valores "category"
        
        expect(wrapper.find('GifGrid').length).toBe(category.length); //comparamos tamaños deben ser 2 

    })
    
    
})
