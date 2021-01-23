import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"




describe('Pruebas en <GifGridItem/>', () => {
    const title= 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper= shallow (<GifGridItem title={title} url={url} />)

    test('debe de mostrar el componente correctamente ', () => {
    
        
        expect(wrapper).toMatchSnapshot();
    
    })
    //nuevos test 
    test('debe de tener un parrafo con el title ', () => {
    
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title ); 
    
    })

    test('debe tener la imagen igual a url y alt de los props ', () => {
        
        const img = wrapper.find('img');
        
        // console.log(img.prop('alt'))
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })
    test('debe tener animete_fadeIn ', () => {
        
        
        const div = wrapper.find( 'div' )
        // console.log(div.prop('className'))

        const className = div.prop('className'); //obtenemos el nombre de la clase

        expect( className.includes('nimate__fadeIn') ).toBe( true );
        

    })
    
})


