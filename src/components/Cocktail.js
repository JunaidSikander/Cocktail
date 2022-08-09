import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBRipple} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const Cocktail = ({id, image, name, glass, info}) => {
    return (
        <MDBCard className='card'>
            <MDBRipple>
                <MDBCardImage className='rounded' loading='lazy' src={image} alt={name} width={350}/>
                <Link to={`/cocktail/${id}`}>
                    <div className='mask ripple-color'></div>
                </Link>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{name} ({glass})</MDBCardTitle>
                <MDBCardText> {info} </MDBCardText>
                <Link to={`/cocktail/${id}`} >
                    <MDBBtn outline rounded className='w-100'>
                        Details
                    </MDBBtn>
                </Link>
            </MDBCardBody>
        </MDBCard>
    )
};

export default Cocktail;