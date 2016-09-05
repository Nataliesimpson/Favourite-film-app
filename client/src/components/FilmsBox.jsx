var React = require('react')
//we want the film box to use these components //
var FilmsList = require('./FilmsList')
var FilmsForm = require('./FilmsForm')

//filmsbox controls the state & creates a list//
//the list has no state (things it can change) - just the comments it has been given & uses as properties//
//we create an array of comment nodes in filmslist & give them the properties of name & rating//

var sampleData = [
  {id: 1, name: "Life on the road", rating: "10/10"},
  {id: 2, name: "Captain Fantastic", rating: "7/10"},
  {id: 3, name: "The man who fell to earth", rating: "9/10"},
  {id: 4, name: "Don't breathe", rating: "3/10"}
]

var FilmsBox = React.createClass({

  getInitialState: function(){
    return {data: sampleData}
  },

  handleFilmDelete: function(id){
    console.log("handling delete: ", id)
    var filteredFilms = this.state.data.filter(function(film){
      return film.id != id
    })
    this.setState({data: filteredFilms})
  },

  handleFilmSubmit: function(film){
    film.id = Date.now()
    var newFilms = this.state.data.concat([film])
    this.setState({data: newFilms})
  },

  // React components implement a render method that return what to display //
  render: function(){
    return(
      <div className='film-box'>
        <h1>Films of the week</h1>
        <FilmsList data={this.state.data} handleFilmDelete={this.handleFilmDelete}/>
        <FilmsForm handleFilmSubmit={this.handleFilmSubmit}/>
      </div>  
    )
  }

})


module.exports = FilmsBox





