import "./Banner.sass";

const Banner = (props) => {
  console.log(props);

  return (
    <div className="picture">
      <h1>{props.title}</h1>
      <img alt="" src={props.picture}></img>
    </div>
  );
};

export default Banner;
