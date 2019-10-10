import React, { Component } from "react";
import "../css/2018_notebook/css/coda-slider.css";
import "../css/2018_notebook/tooplate_style.css";
import Polaroid from "../components/Polaroid";
import { fetchStories, currentStory } from "../actions/storiesActions.js";
import { connect } from "react-redux";
import composedAuthHOC from "../HOC/AuthHOC.js";

const IMG =
  "https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg";

class Stories extends Component {

    componentDidMount() {
        // console.log("fetching stories");
        this.props.fetchStories(this.props);
      }
      generateCards = () => {
        // console.log("cards!", this.props.stories);
        return this.props.stories.map(story => {
          return (
            <Polaroid
              handleClick={this.clickStory}
              story={story}
              caption={story.title}
              key={story.title}
              id={story.id}
            />
          );
        });
      };
    
      clickStory = e => {
        e.preventDefault();
        // set current story in state
        let story;
        this.props.stories.forEach(s => {
          console.log(s.id, e.currentTarget.id)
          if (`${s.id}` === `${e.currentTarget.id}`){
            story = s
          }
          return story
        })
        console.log('story: ', story)
        this.props.currentStory(story)
        this.props.history.push(`/stories/${e.currentTarget.id}`);
      };
  render() {
    return (
      <div className="panel" id="stories">
        <div className="content_section">
          <h2>Tales of {this.props.story.name}</h2>
        </div>
        <div className="content_section last_section">
          {this.generateCards()}
          <Polaroid
            handleClick={this.clickStory}
            id="new"
            img={IMG}
            caption="New Story"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories.stories,
    logged_in: state.auth.logged_in,
    story: state.stories.story,
    stories: state.stories.stories
  };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchStories: () => dispatch(fetchStories()),
      currentStory: (story) => dispatch(currentStory(story))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(composedAuthHOC(Stories));
