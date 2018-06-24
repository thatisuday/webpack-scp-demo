import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';
import loadable from 'react-loadable';

import './styles.scss';

// loading view
const LoadingComponent = () => <h3>please wait...</h3>;

// home component
//import HomeComponent from './home.component';

const AsyncHomeComponent = loadable( {
    loader: () => import( './home.component' ),
    loading: LoadingComponent
} );

// about component
const AsyncAboutComponent = loadable( {
    loader: () => import( './about.component' ),
    loading: LoadingComponent
} );

// contact component
const AsyncContactComponent = loadable( {
    loader: () => import( './contact.component' ),
    loading: LoadingComponent
} );

// create sample App component
class App extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return(
            <BrowserRouter>
                <div className="content">
                    <div className="menu">
                        <Link exact to="/" activeClassName="active">Home</Link>
                        <Link to="/about" activeClassName="active">About</Link>
                        <Link to="/contact" activeClassName="active">Contact</Link>
                    </div>
                    
                    <Switch>
                        <Route exact path="/" component={ AsyncHomeComponent } />
                        <Route path="/about" component={ AsyncAboutComponent } />
                        <Route path="/contact" component={ AsyncContactComponent } />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

// render inside `app-root` element
ReactDOM.render( <App />, document.getElementById( 'app-root' ) );