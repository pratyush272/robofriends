import React,{Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css'
import Scroll from '../components/Scroll'



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
		const filteredProfiles = this.state.Profiles.filter(Profiles => {return Profiles.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
	if(this.state.Profiles.length ===0){return(<h4> LOADING </h4>)}
	else {

			return(
					<div className='tc'>
					<h1  >Search Friends</h1>
					<Searchbox SearchChange={ this.onSearchChange}/>
					<Scroll>
						<CardList Profiles={filteredProfiles} />
					</Scroll>
					</div>
				);
		}

	}
}


export default App;