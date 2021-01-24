import React from 'react';
import '@testing-library/jest-dom'; //ayuda en el autocompletado 
import { shallow } from "enzyme"; 
import { GifGrid } from "../../components/GifGrid"; 
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //finge cualquier llamada a ese archivo y suponer o controlar la info q eso va a responder


describe('Pruebas en <GifGrid/>', () => {
    
    const category = 'One Puch'; //nueva funcion
    
    test('debe de mostrar correctamente ', () => {
        //falseamos la data
        
        useFetchGifs.mockReturnValue ({  
            data: [],
            loading: true
        });

        const wrapper= shallow(<GifGrid category={category}/>)
        
        expect(wrapper).toMatchSnapshot();

    })
    test('debe de mostrar items cuandos e cargan imágenes useFetchGifs', () => {
        
        const gifs = [{  //lo mandamos en data 
            id: '123',
            title: 'cualquier cosa',
            url: 'http://localhost.cualquiercosa.jpg'
        },{  //lo mandamos en data 
            id: 'ABC',
            title: 'cualquier cosa',
            url: 'http://localhost.cualquiercosa.jpg'
        }]
        
        useFetchGifs.mockReturnValue ({  
            data: gifs,  //aca
            loading: false  //osea ya tengo la información
        });
        
        const wrapper= shallow(<GifGrid category={category}/>) //conexión con el componente
        
        // expect(wrapper).toMatchSnapshot();

        expect( wrapper.find('p'). exists() ).toBe( false ) //comprueba si existe el parrafo , lo q significa q loading esta en false 
    
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
    
    
})
