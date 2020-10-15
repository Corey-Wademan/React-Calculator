import React from 'react';

class OutputComponent extends React.Component {
    render() {
        let {result} = this.props;
        return (
            <div className='result'>
               <p>{result}</p> 
            </div>
        )
    }
}

export default OutputComponent;