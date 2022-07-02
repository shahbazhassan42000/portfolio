import {createContext, useContext, useEffect, useState} from 'react';

const viewport = createContext(window.innerWidth);

export const ViewportProvider = ({children}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWidthResize = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWidthResize);
        return () => {
            window.removeEventListener('resize', handleWidthResize);
        };
    }, []);


    return (
        <viewport.Provider value={width}>
            {children}
        </viewport.Provider>
    );
};

export const useViewport = () => {
    return useContext(viewport);
}
const IsMobile= () => {
    return useViewport(viewport) < 620
}
export default IsMobile;
