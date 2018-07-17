var React = require('react');
var ReactDom = require('react-dom');
import { Media } from 'reactstrap';

//CSS requires
require('../css/todoItem.css');

const Profile = (props) => {
    var profile = props.profile;
        return(
            <div className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={profile.photos[0]} alt={profile.firstName} width="100%" />
                      <Media heading>{profile.firstName + ' ' + profile.lastName}</Media>
                  </Media>
                  
                </Media>
            </div>
        );
    }

export default Profile