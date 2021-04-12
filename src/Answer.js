import React from 'react';
import np from 'numjs';

class Answer extends React.Component {
   state={
        
   }

    stiffnessMatrix(theta,A,E,I,L) {
        
         let T = np.zeros((6,6));
         return T;
   }









   render() {

       return(
           <div>{this.stiffnessMatrix(1,2,3,4,5)}</div>
       )
   }
}
export default Answer;