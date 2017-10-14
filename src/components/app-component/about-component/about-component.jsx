import './about-component.styl';
import img from './images/photo.jpeg';

import React from 'react';
import bevis from 'src/utils/bevis-util';

const b = bevis('about-component');

class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={b()}>
                <img className={b('photo')} src={img} alt="Owner photo"/>
                <p className={b('info')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent efficitur ullamcorper feugiat. Vestibulum ornare suscipit ante in vehicula.
                    Fusce semper nisl nec quam euismod, sit amet malesuada ipsum tincidunt.
                    Vestibulum posuere ut velit in sodales. Etiam at dignissim ante.
                    In sit amet orci quis nibh vulputate ultricies. Etiam sagittis nisl eu pulvinar auctor.
                    Phasellus tortor massa, luctus vitae est vitae, hendrerit accumsan massa.
                    Nullam ut leo tortor. Pellentesque ac massa egestas, semper diam vitae, scelerisque ligula.
                </p>
            </div>
        );
    }
}

export default AboutComponent;