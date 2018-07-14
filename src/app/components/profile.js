var React = require('react');
var ReactDom = require('react-dom');
import { Media } from 'reactstrap';

//CSS requires
require('../css/todoItem.css');

//Create TodoItem component
var Profile = React.createClass({
    render: function(){
        const profile = this.props.profile;
        // console.log(profile)
        return(
            <div className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src="" alt={profile.firstName} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{profile.firstName + ' ' + profile.lastName}</Media>
                    <p></p>
                  </Media>
                </Media>
            </div>
        );
    },

    //Custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.profile);
    }
});

module.exports = Profile;
