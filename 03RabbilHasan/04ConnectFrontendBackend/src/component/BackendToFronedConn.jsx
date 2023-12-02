import React from 'react';
import axios from 'axios'
import { setState } from 'react';

class BackendToFronedConn extends React.Component{

    state_object = {details: []}

    componentDidMount(){
         
        axios.get('http://127.0.0.1:8000/api/event_lc/')
            .then(response => {
                const data = response.data
                this.setState({ details : data}, [])
            })
            .catch( (err) => {console.error(err)})
    }

    render(){
        return(
            <div>
                <h1>Data get from django api</h1>
                <hr />
                {this.state_object.details.map((output, id) => (
                   <div key={id}>
                    <div>
                    <p>{output.eventOwnerName}</p>
                    <p>{output.eventTitle}</p>
                    <p>{output.eventDate}</p>
                    <p>{output.eventTime}</p>
                    <p>{output.totalSeat}</p>
                    </div>
                   </div>
                ))}
            </div>
        )
    }

}

export default BackendToFronedConn