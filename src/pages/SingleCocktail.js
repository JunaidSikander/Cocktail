import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchSingleCocktail} from "../redux/slices/cocktailSlice";
import {MDBBtn, MDBSpinner, MDBTypography} from "mdb-react-ui-kit";

const SingleCocktail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const {cocktail, loading} = useSelector(store => store.app);

    const [modifiedCocktail, setModifiedCocktail] = useState(null);

    useEffect(() => {
        dispatch(fetchSingleCocktail({id}));
    }, [dispatch, id])

    useEffect(() => {
        if (cocktail.length > 0) {
            const {
                strDrink: name,
                strDrinkThumb: image,
                strAlcoholic: info,
                strCategory: category,
                strGlass: glass,
                strInstrument: instruction,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
            } = cocktail[0];

            const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
            const newCocktail = {name, image, info, category, glass, instruction, ingredients};
            setModifiedCocktail(newCocktail);
        } else {
            setModifiedCocktail(null)
        }
    }, [cocktail, id])

    if (loading) return <div className='text-center mt-5'>
        <MDBSpinner role='status' color='primary'>
            <span className='visually-hidden'>Loading...</span>
        </MDBSpinner>
    </div>

    if (!modifiedCocktail)
        return <MDBTypography tag='h2'> No Cocktail to display </MDBTypography>

    const {name, image, info, category, glass, instruction, ingredients} = modifiedCocktail
    return (
        <div className="section cocktail-section">
            <Link to='/'>
                <MDBBtn className='mt-1' color='danger'>GO Back</MDBBtn>
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
                <img src={image} alt={name}/>
                <div className="drink-info">
                    <p>
                        <span className="drink-data"> Name: </span> {name}
                    </p>
                    <p>
                        <span className="drink-data"> Category: </span> {category}
                    </p>
                    <p>
                        <span className="drink-data"> Info: </span> {info}
                    </p>
                    <p>
                        <span className="drink-data">Glass: </span> {glass}
                    </p>
                    <p>
                        <span className="drink-data"> Instruction </span> {instruction}
                    </p>
                    <p>
                        <span className="drink-data"> Ingredients </span>
                        {ingredients && ingredients.map((item, index) => {
                            return (item && <span key={index}> {item} </span>)
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleCocktail