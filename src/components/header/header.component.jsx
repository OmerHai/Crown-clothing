// General
import React from 'react';
import { ReactComponent as Logo } from '../../assets/original.svg';

// Redux
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// Reselect
import { createStructuredSelector } from 'reselect';

// Firebase
import { auth } from '../../firebase/firebase.utils';

// Our Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Styles
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

/* This is component for the header of the site */
const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
            {currentUser ?
                <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>:
                <OptionLink to="signin">SIGN IN</OptionLink>}
            <CartIcon />
        </OptionsContainer>
        {hidden ? 
            null :
            <CartDropdown />} 
    </HeaderContainer>
);

// Redux Functions
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);