import React from 'react';



const EditExpensePage=(props)=>(
    <div>
      This is the edit page for {props.match.params.id}
    </div>
)

export default EditExpensePage;