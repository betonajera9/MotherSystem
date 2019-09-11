import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Route, Redirect } from 'react-router-dom';

const Orders = (props)=> {
  return (
    <Query
      query={gql`
        query ($name: String!, $grade: String) {
          teachers(name: $name, grade: $grade){
            _id
            name
            grade
          }
        }
      `} variables= {props}
    >
      {({ load, err, data }) => {
        if (load) {
          return (
            <div class='preloader-wrapper big active'>
              <div class='spinner-layer spinner-blue-only'>
                <div class='circle-clipper left'>
                  <div class='circle'></div>
                </div><div class='gap-patch'>
                  <div class='circle'></div>
                </div><div class='circle-clipper right'>
                  <div class='circle'></div>
                </div>
              </div>
            </div>
          );
        }

        if (err) {
          return <p>Error :(</p>;
        }

        data.teachers.map(teacher => <p key={techer._id}>{teacher.name}</p>);

      }
    }
    </Query>
  );
};

export default Orders;
