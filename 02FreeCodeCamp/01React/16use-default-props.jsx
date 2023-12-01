const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = {items: 0}
class Myshopping extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      
        <ShoppingCart/>
      
    )
  }
}