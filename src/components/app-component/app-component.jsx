import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import MenuComponent from 'src/components/app-component/menu-component/menu-component';
import AboutComponent from 'src/components/app-component/about-component/about-component';
import ResumeComponent from 'src/components/app-component/resume-component/resume-component';
import MailtoComponent from 'src/components/app-component/mailto-component/mailto-component';
import DiaryComponent from 'src/components/app-component/diary-component/diary-component';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <header>
                        <MenuComponent />
                    </header>
                    <article>
                        <Route exact path="/" component={AboutComponent} />
                        <Route path="/resume" component={ResumeComponent} />
                        <Route path="/mailto" component={MailtoComponent} />
                        <Route path="/diary" component={DiaryComponent} />
                    </article>
                    <footer>
                        <p>2017</p>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default AppComponent;