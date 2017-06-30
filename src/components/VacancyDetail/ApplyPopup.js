import React from 'react';
import Modal from 'react-modal';
import TextInput from '../common/TextInput';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {agreeToVacancy} from '../../actions/vacancyActions';

const customStyles = {
  content: {
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class ApplyPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      applyForm: {
        name: "",
        email: "",
        description: "",
        files:[] ,
      }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
    this.agreeSubmit=this.agreeSubmit.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  handleInputChange(e){
    const applyForm=Object.assign({},this.state.applyForm);
    applyForm[e.target.name]=e.target.value;
     this.setState({applyForm:applyForm})
  }
  agreeSubmit(e){
    e.preventDefault(); 
  }
  render() {
    return (
      <div>
        <button onClick={this.openModal} id='agreebutton'>Погодитись на цю роботу</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Applay Modal"
        >
          <div>
            <div className="small-dialog-headline">
              <h2 >Погодитись на цю роботу</h2>
            </div>
            <button onClick={this.closeModal} className="mfp-close"></button>
            <div className="small-dialog-content">
              <form onSubmit={this.agreeSubmit}>
                <TextInput
                  type="text"
                  placeholder="Повне ім'я"
                  name="name"
                  value={this.state.applyForm.name}
                  onChange={this.handleInputChange} />
                <div className="clearfixform" />

                <TextInput
                  type="email"
                  name="email"
                  value={this.state.applyForm.email}
                  placeholder="Електронна адреса"
                  onChange={this.handleInputChange} />
                <div className="clearfixform" />

                <textarea
                  className="WYSIWYG"
                  id="summary"
                  value={this.state.applyForm.description}
                  onChange={this.handleInputChange}
                  name="description"
                  placeholder="Ваше повідомлення / лист, який ви хочете надіслати роботодівцю" />
                <div className="clearfixform" />

                <div className="upload-info">
                  <strong>Завантажити ваше резюме</strong>
                  <span>Максимальний розмір файлу: 5MB</span>
                </div>

                <div className="clearfix" />
                <label className="upload-btn">
                  <TextInput
                    type="file"
                    name="file"
                    multiple
                    value={this.state.applyForm.file}
                    onChange={(e)=>{onChangeFiles({ files: e.target.files, index });}} />
                  <i className="fa fa-upload" />Завантажити
              </label>
                <span className="fake-input">Жодний файл не є вибраним</span>
                <div className="divider" />
                <button className="send" type="submit">Надіслати заявку</button>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
ApplyPopup.PropTypes={
  handleInputChange:PropTypes.func.isRequired,
  openModal:PropTypes.func.isRequired,
  closeModal:PropTypes.func.isRequired,
  agreeSubmit:PropTypes.func.isRequired,
}
function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
  };
}
export default connect(mapStateToProps,{agreeToVacancy})(ApplyPopup);
 