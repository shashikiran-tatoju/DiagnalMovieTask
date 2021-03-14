import { useState } from "react";
import { connect } from "react-redux";
import { searchMovies } from "../redux/MoviesActions";



function Header(props) {
  const WIDTH = props.dimensions[0];
  const HEIGHT = props.dimensions[1];
  const HEADER_HEIGHT = HEIGHT / 7;
  const HEADER_TITLE_SIZE = HEADER_HEIGHT / 4;
  const BACK_AND_SEARCH_SIZE = HEADER_HEIGHT / 3.5;
  const MARGIN_LEFT = BACK_AND_SEARCH_SIZE / 2;
  const MARGIN_RIGHT = MARGIN_LEFT;

  const headerStyle = {
    height: HEADER_HEIGHT,
    backgroundColor: "transparent",
    zIndex: 1,
    position: "absolute",
  };
  const innerDivStyle = {
    flexDirection: "row",
    display: "flex",
    position: "absolute",
    top: -10,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    alignItems: "center",
    backgroundColor: "transparent",
  };
  const inputStyle = {
    flexGrow: 1,
    height: BACK_AND_SEARCH_SIZE,

    marginLeft: MARGIN_LEFT,
    marginRight: MARGIN_RIGHT,
  };
  const headerTitleStyle = {
    color: "white",
    flexGrow: 1,
    marginLeft: MARGIN_LEFT,
    fontFamily: "Titillium Web",
    fontWeight: "bold",
    fontSize: HEADER_TITLE_SIZE,
  };
  const searchImageStyle = { marginRight: MARGIN_RIGHT };
  const backImageStyle = { marginLeft: MARGIN_LEFT };

  const [isSearch, setIsSearch] = useState(false);

  const onSearchPress = () => {
    setIsSearch((prev) => !prev);
  };
  const onSearch = (event) => {
    console.log(event.target.value);
    props.searchMovies(event.target.value);
  };
  const onBackClick = () => {
    setIsSearch(false);
    props.searchMovies(null);
  };
  return (
    <div style={headerStyle}>
      <img
        width={window.innerWidth}
        height={HEADER_HEIGHT}
        src={process.env.PUBLIC_URL + "/assets/nav_bar.png"}
        alt={"image missing"}
      />
      <div style={innerDivStyle}>
        <img
          onClick={onBackClick}
          style={backImageStyle}
          width={BACK_AND_SEARCH_SIZE}
          height={BACK_AND_SEARCH_SIZE}
          src={process.env.PUBLIC_URL + "/assets/Back.png"}
          alt={"image missing"}
        />
        {isSearch ? (
          <input
            style={inputStyle}
            placeholder={"Search movie here..."}
            onChange={onSearch}
          />
        ) : (
          <p style={headerTitleStyle}>Romantic Comedy</p>
        )}

        <img
          onClick={onSearchPress}
          style={searchImageStyle}
          width={BACK_AND_SEARCH_SIZE}
          height={BACK_AND_SEARCH_SIZE}
          src={process.env.PUBLIC_URL + "/assets/search.png"}
          alt={"image missing"}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies: (pagenum) => dispatch(searchMovies(pagenum)),
  };
};
export default connect(null, mapDispatchToProps)(Header);
