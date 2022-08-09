import {MDBInput, MDBTypography} from "mdb-react-ui-kit";
import {useDispatch} from "react-redux";
import {useDebounce} from "../hooks";
import {useState} from "react";
import {fetchSearchCocktail} from "../redux/slices/cocktailSlice";

const SearchInput = () => {
    const [searchText, setSearchText] = useState();
    const dispatch = useDispatch();

    const onChangeHandler = (e) => setSearchText(e.target.value);

    useDebounce(() => dispatch(fetchSearchCocktail({searchText})), 1000, [searchText])

    return (
        <section className='d-flex justify-content-center mt-4'>
            <div className='rounded w-50 p-4 bg-light'>
                <MDBTypography className='text-uppercase text-center' tag='h3'>Search Cocktail</MDBTypography>
                <MDBInput className='mt-3' label='Search Here...' size='lg' onChange={onChangeHandler}/>
            </div>
        </section>
    )
}

export default SearchInput