

const Menu = () => {
    return (
        <div>
            <h1>Link to the other page</h1>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/product" >Produc</Link></li>
                <li><Link to="/profile" >Profile</Link></li>
                <li><Link to="/notFound" >Not Found Page</Link></li>
            </ul>
            
        </div>
    );
};

export default Menu;