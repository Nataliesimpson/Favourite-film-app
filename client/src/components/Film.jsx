var React = require('react')

// Film component depends on data passed in from its parent //
// Data passed in from a parent component is availible as a 'property' on the child component //
// These properties are accessed through this.props//

//props are immutable, components can't change their properties, they are just given them//
//using props we will be able to read the data passed to the film from the filmlist & render some markup//

propTypes: {
  name: React.PropTypes.string.isRequired
}

var Film = React.createClass({

  handleDelete: function(){
    this.props.handleFilmDelete(this.props.id)
  },

  render: function(){
    return(
      <div className='film'>
        <h2 className='film-name'>
        {this.props.name}
        </h2>
        {this.props.children}
        <button onClick={this.handleDelete} > Delete Film </button>
      </div>  
    )
  }
})

module.exports = Film