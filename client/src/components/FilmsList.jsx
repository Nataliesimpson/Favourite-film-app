var React = require('react')
var Film = require('./Film')

var FilmsList = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired,
    handleFilmDelete: React.PropTypes.func.isRequired
  },

  //any strings put inside our array tags can be accessed as children properties //
  //React wants a key element on array items to uniquely identify them //
  render: function(){
    var filmNodes = this.props.data.map(function(film){
      return (
          <Film name={film.name} id={film.id} key={film.id} 
          handleFilmDelete={this.props.handleFilmDelete}>
          {film.rating}
          </Film>
        )
    }.bind(this))
    return(
      <div className='film-list'>
       {filmNodes}
      </div>  
    )
  }
})


module.exports = FilmsList