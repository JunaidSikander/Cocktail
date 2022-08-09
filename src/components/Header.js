import {MDBContainer, MDBNavbar, MDBNavbarBrand} from 'mdb-react-ui-kit'

const Header = () => {
    return (
        <MDBNavbar light expand='lg' bgColor='primary'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#' className='text-uppercase text-light'>
                    Cocktails
                </MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Header