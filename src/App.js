import React, {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import {Home, SingleCocktail} from "pages";
import {Header} from "components";

const App = () => {
    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
            </Routes>
        </Fragment>
    )
}

export default App;