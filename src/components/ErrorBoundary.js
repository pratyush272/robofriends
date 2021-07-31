import React, {Component} from 'react;'
class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

componentDidCatch(error,info){this.setState({hasError: true})}

render(){
	return (this.state.hasError) ? <h1> Opps that is not good.</h1> : thhis.props.children
	
}

}