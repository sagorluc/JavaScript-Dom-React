class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line

const Camper = (prop) => {
  return(
    <p>{prop.name}</p>
  )
}



Camper.defaultProps = {name: "CamperBot"}

Camper.propTypes = {name: PropTypes.string.isRequired} // true/false