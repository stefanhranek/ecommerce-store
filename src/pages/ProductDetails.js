import React, { Component } from 'react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import DetailsCard from '../components/DetailsCard'

export default class ProductDetails extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <DetailsCard></DetailsCard>
                <BottomNav></BottomNav>
            </div>
        )
    }
}
