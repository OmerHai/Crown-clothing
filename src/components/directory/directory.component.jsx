// General
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// Reselect
import { createStructuredSelector } from 'reselect';

// Our Components
import MenuItem from '../menu-item/menu-item.component';

// Styles
import { DirectoryMenuContainer } from './directory.styles';

/* Component that will order the menu items in rows(this the container of all menu items) */
const Directory = ({ sections }) => (
  <DirectoryMenuContainer className='directory-menu'>
    {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/>
      ))}
  </DirectoryMenuContainer>
);

// Redux Functions
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);