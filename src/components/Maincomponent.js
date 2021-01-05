import React, { Component } from 'react'
import Home from './HomeComponent';
import Menu from './MenuComponent'
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetail from './DishDetailsComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        
        // selectedDish: null
        };
    }
    render() {

        const HomePage = ()=> {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                /> 
            )
        }
        
        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
        };

        return (
            <div className="App">
            <Header/>
            <Switch>
                {/* there is no value of props */}
                <Route path="/home" component = {HomePage}/>
                {/* in the menu component have props and this value is passess through this way */}
                <Route exact path="/menu" component = {() => <Menu dishes={this.state.dishes} />}/>
                {/* menu/:dishId here dishId is perameter key*/}
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path="/contactus" component = {Contact}/>
                {/* <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} /> */}
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
            </div>
        );
    }
}

export default Main;