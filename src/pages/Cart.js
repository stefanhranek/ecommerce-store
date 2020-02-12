import React, { Component } from 'react'
import Header from '../components/Header'
import CartForm from '../components/CartForm'
import CartItem from '../components/CartItem'
import BottomNav from '../components/BottomNav'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <CartForm></CartForm>
                <CartItem></CartItem>
                <BottomNav></BottomNav>
            </div>
        )
    }
}
