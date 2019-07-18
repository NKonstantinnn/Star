import React, { Component } from 'react';
import Spinner from '../components/spinner/spinner';
import ErrorIndicator from '../components/error-indicator/error-indicator';


const withData = (View) => {
    return class extends Component {
  
      state = {
        data: {},
        loading: true,
        error: false
      };
    
      componentDidMount() {
        
        this.onStartLoad();
        this.props.getData()
          .then(this.onEndLoad)
          .catch(this.onError);
      }

      onStartLoad = () => {
        this.setState({
          loading: true,
          error: false
        });
      };

      onEndLoad = (data) => {
        this.setState({
          loading: false,
          data: data
        });
      };

      onError = () => {
        this.setState({
          loading: false,
          error: true
        });
      }
  
      render() {
  
        const { data, loading, error } = this.state;
  
        if(loading) {
          return <Spinner />;
        }

        if(error) {
          return <ErrorIndicator />
        }
  
        return <View { ...this.props } data={ data } />;
      }
    };
  }

  export default withData;