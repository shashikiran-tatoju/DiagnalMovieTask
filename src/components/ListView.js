import React from "react";
import { connect } from "react-redux";
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from "recyclerlistview/web";
import { readMovies } from "../redux/MoviesActions";

const scrollViewPropStyle = {
  showsVerticalScrollIndicator: false,
};
const VIEW_TYPE = 0;

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });
    this.pagenum = 1;
    this._layoutProvider = new LayoutProvider(
      (index) => {
        return VIEW_TYPE;
      },
      (type, dim) => {
        switch (type) {
          case VIEW_TYPE:
            dim.width = this.CARD_WIDTH;
            dim.height = this.CARD_HEIGHT;
            break;

          default:
            dim.width = 0;
            dim.height = 0;
        }
      }
    );
    this.init();
  }

  init = () => {
    this.WIDTH = this.props.dimensions[0];
    this.HEIGHT = this.props.dimensions[1];
    this.HEADER_HEIGHT = this.HEIGHT / 7;
    this.TEXT_SIZE = this.HEADER_HEIGHT / 5.5;
    this.CARD_WIDTH = this.WIDTH / 3.1;
    this.CARD_HEIGHT = (this.CARD_WIDTH * 3.5) / 2 + this.TEXT_SIZE;
    this.PADDINGLEFT = this.WIDTH * 0.016;
    this.IMAGE_WIDTH = this.CARD_WIDTH - 12;
    this.IMAGE_HEIGHT = (this.IMAGE_WIDTH * 3) / 2;
    this.BACK_AND_SEARCH_SIZE = this.HEADER_HEIGHT / 3;
    this.MARGIN_LEFT = this.BACK_AND_SEARCH_SIZE / 2;
    this.MARGIN_RIGHT = this.MARGIN_LEFT;

    this.rowRendererDivStyle = {
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
    };

    this.rowRendererTextStyle = {
      width: this.IMAGE_WIDTH,
      margin: 0,
      fontFamily: "Titillium Web",
      fontSize: this.TEXT_SIZE,
      color: "white",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    };
    this.listViewDivStyle = {
      height: this.HEIGHT,
      width: this.WIDTH,
      paddingLeft: this.PADDINGLEFT,
      backgroundColor: "transparent",
      paddingTop: this.HEADER_HEIGHT / 1.6,
    };
  };
  componentWillUpdate() {
    this.init();
  }

  onImageError = (e) => {
    e.target.onError = null;
    e.target.src =
      process.env.PUBLIC_URL + "/assets/placeholder_for_missing_posters.png";
  };

  rowRenderer = (type, data) => {
    switch (type) {
      case VIEW_TYPE:
        return (
          <div style={this.rowRendererDivStyle}>
            <img
              width={this.IMAGE_WIDTH}
              src={process.env.PUBLIC_URL + "/assets/" + data["poster-image"]}
              onError={this.onImageError}
              alt={"Image is missing"}
            />
            <p style={this.rowRendererTextStyle}>{data.name}</p>
          </div>
        );

      default:
        return null;
    }
  };
  onEndReached = () => {
    console.log("pagenum", this.pagenum);
    this.pagenum = this.pagenum + 1;
    if (this.pagenum >= 3) {
      this.pagenum = 3;
    }
    this.props.readMovies(this.pagenum);
  };

  render() {
    console.log("render");
    return (
      <div style={this.listViewDivStyle}>
        <RecyclerListView
          layoutProvider={this._layoutProvider}
          dataProvider={this.dataProvider.cloneWithRows(this.props.movies.data)}
          rowRenderer={this.rowRenderer}
          scrollViewProps={scrollViewPropStyle}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.7}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("hello redux", state);
  const { movies } = state;
  return { movies };
};
const mapDispatchToProps = (dispatch) => {
  return {
    readMovies: (pagenum) => dispatch(readMovies(pagenum)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListView);
