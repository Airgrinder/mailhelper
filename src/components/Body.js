import React, { Component } from 'react'

export default class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {
            basicData: "lion",
            modifierData: 1,
            mailServiceData: "gmail.com",
            generatedResult: "",
            data: []
        }
    }

    generateCredential = () => {
        this.setState(state => ({
            modifierData: this.state.modifierData + 1,
            data: [...state.data, {
                email: this.state.basicData + this.state.modifierData + "@" + this.state.mailServiceData,
                pass: this.makeID(),
            }]
        }))
    }

    makeID = () => {
        const makePathID = (length) => {
            let text = "";
            const char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < length; i++) {
                text += char_list.charAt(Math.floor(Math.random() * char_list.length));
            }
            return text;
        }
        return makePathID(12)
    }

    render() {
        const { data } = this.state
        return (
            <div className="App">
                <div className="body">
                    <div className="body-input">
                        <div className="body-input__basic"><input onChange={() => { }} type="text" placeholder='Enter mailbox name. Example: "Alex"' /></div>
                        <div className="body-input__modifier"><input type="text" placeholder='Enter the modifier. Example: "1"' /></div>
                        <div className="body-input__@"><h1>@</h1></div>
                        <div className="body-input__mail-service"><input type="text" placeholder='Enter mail service name. Example: "gmail.com"' /></div>
                        <div className="body-input__button"><button onClick={this.generateCredential} type="submit">generate</button></div>
                    </div>
                    <div className="body-settings">
                        <div className="body-settings__randomPassword-title">generate random password</div>
                        <div className="body-settings__randomPassword-checkbox"><input type="checkbox" /></div>
                    </div>
                    <div className="body-list">
                        <div className="body-list__headline">Generated list</div>
                        <div className="body-list__generate-list">
                            {
                                data.length ? data.reverse().map((obj) => {
                                    return <p>{obj.email} - {obj.pass} <button onClick={() => document.execCommand("copy")}>copy</button></p>
                                }) : <p>error, empty input</p>
                            }
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}