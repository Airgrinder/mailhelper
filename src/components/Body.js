import React, { Component } from 'react'

export default class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        generateMail() {

        }
    }
    render() {
        return (
            <div className="App">
                <div className="body">
                    <div className="body-input">
                        <div className="body-input__basic"><input type="text" placeholder='Enter mailbox name. Example: "Alex"' /></div>
                        <div className="body-input__modifier"><input type="text" placeholder='Enter the modifier. Example: "1"' /></div>
                        <div className="body-input__@"><h1>@</h1></div>
                        <div className="body-input__mail-service"><input type="text" placeholder='Enter mail service name. Example: "gmail.com"' /></div>
                        <div className="body-input__button"><button type="submit">generate</button></div>
                    </div>
                    <div className="body-settings">
                        <div className="body-settings__randomPassword-title">generate random password</div>
                        <div className="body-settings__randomPassword-checkbox"><input type="checkbox" /></div>
                    </div>
                    <div className="body-list">
                        <div className="body-list__headline">Generate list</div>
                        <div className="body-list__generate-list">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}