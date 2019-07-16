import { connect } from 'react-redux';
import { fetchUserTweets } from '../../actions/tweet_actions';
import { fetchUserPants } from '../../actions/pant_actions';
import { fetchUserTops } from '../../actions/top_actions';

import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.user),
    currentUser: state.session.user,
    tops: Object.values(state.tops.user),
    pants: Object.values(state.pants.user)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTweets: id => dispatch(fetchUserTweets(id)),
    fetchUserPants: id => dispatch(fetchUserPants(id)),
    fetchUserTops: id => dispatch(fetchUserTops(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
