import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCocktails} from "redux/slices/cocktailSlice";
import {MDBContainer, MDBSpinner} from "mdb-react-ui-kit";
import {Cocktail} from "components";

const CocktailList = () => {
    const dispatch = useDispatch();

    const {cocktails, loading} = useSelector(store => store.app);
    const [modifiedCocktail, setModifiedCocktail] = useState([]);


    useEffect(() => {
        if (cocktails?.length === 0)
            dispatch(fetchCocktails())
    }, [cocktails, dispatch]);

    useEffect(() => {
        if (!cocktails) return;

        const newCocktails = cocktails
            ?.map((item) => {
                const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass,
                }
            });
        setModifiedCocktail(newCocktails);

    }, [cocktails])

    if (loading) return (
        <div className='text-center mt-5'>
            <MDBSpinner role='status' color='primary'>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        </div>
    )

    if (!cocktails) return (
        <div className='text-center mt-5'>
            <h4>No Cocktail found on your search criteria</h4>
        </div>
    )

    return (
        <MDBContainer>
            <div className='d-flex flex-wrap justify-content-center gap-4'>
                {
                    modifiedCocktail
                        .map(cocktail => <Cocktail key={cocktail.id} {...cocktail}/>)
                }
            </div>
        </MDBContainer>
    )
}

export default CocktailList;