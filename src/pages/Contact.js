import React, { Component } from 'react'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import BottomNav from '../components/BottomNav'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <ContactForm></ContactForm>
                <BottomNav></BottomNav>
            </div>
        )
    }
}
