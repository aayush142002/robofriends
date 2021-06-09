import React, {Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state = {
					robots: [],
					searchfields: ''
		}
	}

componentDidMount() {	
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	.then(users => this.setState({robots: users}));
}

onSearchChange = (event) => {
	this.setState( {searchfields: event.target.value })
}

	render() {
		const {robots, searchfields} = this.state;
		const filteredRobots = this.state.robots.filter(robots =>{
		    return robots.name.toLowerCase().includes(searchfields.toLowerCase())
	})
	return !robots.length ?
           <h1>Loading</h1> :
		 (
			<div className='tc'>
				 <h1 className='f1'>RoboFriends</h1>
				 <SearchBox searchChange={this.onSearchChange} />
				 <Scroll>
				   <CardList robots={filteredRobots}/>
				 </Scroll>
		    </div>
	    );		

 }
}

export default App;