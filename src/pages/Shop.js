import React, { Component } from 'react'
import Header from '../components/Header'
import ProductsList from '../components/ProductsList'
import BottomNav from '../components/BottomNav'

export default class Shop extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <ProductsList></ProductsList>
                <BottomNav></BottomNav>
            </div>
        )
    }
}
