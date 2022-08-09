import React, {Fragment} from "react";
import {CocktailList, SearchInput} from "components";


const Home = () => {
    return(
        <Fragment>
            <SearchInput/>
            <CocktailList/>
        </Fragment>
    )
}

export default Home;