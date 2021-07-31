import React,{Component} from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import './App.css'
import Scroll from './Scroll'
import ErrorBoundary from '../components/ErrorBoundary'



class App extends Component  {

	constructor() {
    super()
    this.state = {
      Profiles: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ Profiles: users})});
  }

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
			
		
	}


	render() {
		const filteredProfiles = this.state.Profiles.filter(Profile => {return Profile.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})

	return !this.state.Profiles.length ?  <h4> LOADING </h4> : 
																<div className='tc'>
																	<h1  >Robo Friends</h1>
																	<Searchbox SearchChange={ this.onSearchChange}/>
																		<ErrorBoundary>
																			<CardList Profiles={filteredProfiles} />
																		<ErrorBoundary>
																	</Scroll>
																</div>
			

	}
}


export default App;