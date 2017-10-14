import './mailto-component.styl';

import React from 'react';
import Input from 'src/components/app-component/input/input';
import Button from 'src/components/app-component/button/button';
import bevis from 'src/utils/bevis-util';

const b = bevis('mailto-component');

class MailtoComponent extends React.Component {
    constructor(props) {
        super(props);
        this._onSubmit = this._onSubmit.bind(this);
        const savedMailto = localStorage.getItem('mailto');
        this.state = (savedMailto && savedMailto.length > 0) ?
            JSON.parse(savedMailto) :
            {
                name: '',
                subject: '',
                data: '',
                email: ''
            };
    }

    _onChange(name, val) {
        this.setState({[name]: val});
        localStorage.setItem('mailto', JSON.stringify(this.state));
    }

    _onSubmit() {
        fetch('/mailto', {
            method: 'post',
            body: JSON.stringify(this.state),
            mode: 'same-origin'
        })
            .then((err) => {
                if (err) {
                    throw err;
                }
                localStorage.removeItem('mailto');
                console.log('OK');
            })
            .catch((err) => console.error(err));
    }

    render() {
        const props = this.props;
        const state = this.state;

        return (
            <div className={b()}>
                <form method="post" action="/mailto" onSubmit={this._onSubmit}>
                    <Input
                        type="text"
                        placeholder="Enter your name here"
                        value={state.name}
                        onChange={this._onChange.bind(this, 'name')}
                    />
                    <Input
                        type="text"
                        placeholder="Enter subject here"
                        value={state.subject}
                        onChange={this._onChange.bind(this, 'subject')}
                    />
                    <Input
                        type="text"
                        placeholder="Enter your message here"
                        value={state.data}
                        onChange={this._onChange.bind(this, 'data')}
                    />
                    <Input
                        type="text"
                        placeholder="Enter your email here"
                        hint="We'll never share your email with anyone else."
                        value={state.email}
                        onChange={this._onChange.bind(this, 'email')}
                    />
                    <div className="g-recaptcha" data-sitekey="6LfpATIUAAAAAPZMr7mcRYEMSaPBJTzaCogkdh-8" />
                    <Button
                        value='Submit'
                        onClick={this._onSubmit}
                    />
                </form>
            </div>
        );
    }
}

export default MailtoComponent;