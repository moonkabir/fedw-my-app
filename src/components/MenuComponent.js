import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
// import DishDetail from './DishdetailComponent'

class Menu extends Component{

	constructor (props) {
		super(props)
		this.state = {
			selectedDish: null
		}
	}

	renderDish(dish) {
		if (dish == null) return (<div></div>)
		return (
            <div className = 'col-12 col-md-4 m-1'>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
		)
	}

	render() {
		const dishes = this.props.dishes
		const menu = dishes.map((dish) => {
			return (
				<div key = {dish.id} className = 'col-12 col-md-2 m-1'>
					<Card onClick = {()=> this.props.onClick(dish.id)}>
						<CardImg width="100%" src={dish.image} alt={dish.name}/>
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
						
					</Card>
				</div>
			)
		})
		return (
			<div className = 'container'>
				<div className = 'row'>
					{menu}
				</div>
				<div className = 'row'>
					{this.renderDish(this.state.selectedDish)}
				</div>
				{/* <DishDetail selectedDish = {this.state.selectedDish}/> */}
			</div>
		)
    }
}
export default Menu;