import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCatFacts } from '../store/actions/index'

const CatFacts = (props) => {

    useEffect(() => {
        props.fetchCatFacts();
        // console.log(props.fetchCatFacts());
    }, []);

    return (
        <div>
            <h1>Cat Facts:</h1>
            {props.isLoading ? <h3>is Loading...</h3> : null }

            {props.catData ? props.catData.map(item => (
                <p key={item._id}>{item.text}</p>
            )) : null }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        catData: state.catData,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchCatFacts })(CatFacts);