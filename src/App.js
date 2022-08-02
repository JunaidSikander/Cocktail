import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home, SingleCocktail} from "pages";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<SingleCocktail/>}/>
        </Routes>
    )
}

export default App;