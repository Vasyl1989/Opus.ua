import React,{PropTypes} from 'react';
import {connect}  from 'react-redux';
import * as actionTypes from '../../actions/actionTypes';


class AddJobForm extends React.Component{
 constructor(props,context){
     super(props,context);
     this.state={
         job:{
             title:''
         }
     };
     this.onChangeTitle=this.onChangeTitle.bind(this);
     this.onClickSave=this.onClickSave.bind(this); 
 }
 onChangeTitle(event){
     const job=this.state.job;
     job.title=event.target.value;
     this.setState({job:job})
 }
 onClickSave(){
     this.props.dispatch(actionTypes.createVacancy(this.state.job))
 }
 jobRow(job,index){
    return <div key={index}>{job.title}</div>
 }
 render(){
     return(
<div className="container form-add-job">

  {this.props.jobs.map(this.jobRow)}

        {/*------Submit Page------*/}
        <div className="sixteen columns">
          <div className="submit-page">
                
                {/*------- Title------*/}
            <div className="form">
              <h5>Назва вакансії</h5>
              <input 
               className="search-field" 
               type="text"
               onChange={this.onChangeTitle}
               value={this.state.job.title} />
            </div>
            <div className="divider margin-top-0"></div>
            <input
             className="button big margin-top-5"
             type="submit"
             value="Додати ваканцію"
             onClick={this.onClickSave}
            />
          </div>
        </div>

</div>
     );
 }
 
}
AddJobForm.PropTypes={
    dispatch:PropTypes.func.isRequired,
    jobs:PropTypes.array.isRequired
}

function mapStateToProps(state,ownProps){
 return{
     jobs:state.jobs
 }
}


export default connect(mapStateToProps)(AddJobForm);