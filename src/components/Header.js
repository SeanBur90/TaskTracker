import Button from './Button'
import { useLocation} from 'react-router-dom'

const Header = ( {title, onAdd, propShowAdd} ) => {

    const location = useLocation();

    return (
        <header>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color = {propShowAdd ? 'steelblue' : 'green'}
             text={propShowAdd ? 'Close' : 'Add'} onClick = {onAdd} />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
  }

export default Header
 