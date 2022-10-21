import React from 'react'
import Button from '../components/Button/Button'
import Rect from '../components/Rect/Rect'
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card'

const Home = () => {
    const cardData = [
        {
            title: "card 1",
            id: 1
        },
        {
            title: "card 2",
            id: 2
        },
        {
            title: "card 3",
            id: 3
        },
        {
            title: "card 4",
            id: 4
        },
        {
            title: "card 5",
            id: 5
        }
    ]

    let cardNumber = cardData.length > 0 ? cardData.length : 0;

    return (
        <div>
            test
            <h1 className="mb-sml-2">CSS Modules playground</h1>
            <p>Let's play!</p>

            <Layout size={cardNumber}>
                {cardData.map(card => <Card title={card.title} key={card.id} />)}
            </Layout>

            <Rect value={"I am rectangle."} toggle={"is-toggled"} color={"red"} margin={"mb-sml-2"} />

            <Button type={"primary"} size={"base"} value={"Submit"} />
            <Button type={"secondary"} size={"base"} value={"Submit"} />
        </div>
    )
}

export default Home;