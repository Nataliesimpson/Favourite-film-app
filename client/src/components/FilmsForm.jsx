var React = require('react')

var FilmsForm = React.createClass({
  getInitialState: function(){
    return{name: '', rating: ''}
  },

  handleNameChange: function(e){
    this.setState({name: e.target.value})
  },

  handleRatingChange: function(e){
    this.setState({rating: e.target.value})
  },

  handleSubmit: function(e){
    e.preventDefault()
    var name = this.state.name.trim()
    var rating = this.state.rating.trim()
    if( !name || !rating){
      return; //ignore, don't continue//
    }
  this.props.handleFilmSubmit({name: name, rating:rating})  
  this.setState({name: '', rating: ''})
},

  render: function(){
    return(
     <form className='film-form' onSubmit={this.handleSubmit}>
        <input type="name" placeholder="Film name" 
        value={this.state.name}
        onChange={this.handleNameChange}
        />
        <input type="rating" placeholder="Add rating" 
        value={this.state.rating}
        onChange={this.handleRatingChange}
        />
        <input type="submit" value="Add film" />
     </form>
    )
  }

})


module.exports = FilmsForm