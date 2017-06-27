import React from 'react';
import Modal from 'react-modal';
import TextInput from '../common/TextInput';

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
      apply: {
        name: "",
        email: "",
        description: "",
        file: "",
      }
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed. 
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Погодитись на цю роботу</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <div className="small-dialog-headline">
              <h2 >Погодитись на цю роботу</h2>
            </div>
            <button onClick={this.closeModal}>close</button>
            <div className="small-dialog-content">
              <form>
                <TextInput
                  type="text"
                  placeholder="Повне ім'я"
                  name="name"
                  value={this.state.apply.name}
                  onChange={this.handleInputChange} />
                <div className="clearfixform" />

                <TextInput
                  type="email"
                  name="email"
                  value={this.state.apply.email}
                  placeholder="Електронна адреса"
                  onChange={this.handleInputChange} />
                <div className="clearfixform" />

                <textarea
                  className="WYSIWYG"
                  id="summary"
                  value={this.state.apply.description}
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
                    value={this.state.apply.file}
                    onChange={this.handleInputChange} />
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

// class ApplyPopup extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.handleInputChange = this
//       .handleInputChange
//       .bind(this);

//     this.state = {
//       apply: {
//         name: "",
//         email: "",
//         description: "",
//         file: ""
//       },
//       modalIsOpen: false,
//     };
//     // this.openModal = this
//     //   .openModal
//     //   .bind(this);
//     // this.afterOpenModal = this
//     //   .afterOpenModal
//     //   .bind(this);
//     // this.closeModal = this
//     //   .closeModal
//     //   .bind(this);
//   }


//   //modal window
//   openModal() {
//     this.setState({
//       modalIsOpen: true
//     });
//   }

//   afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     this.subtitle.style.color = '#f00';
//   }

//   closeModal() {
//     this.setState({
//       modalIsOpen: false
//     });
//   }


//   handleInputChange(e) {
//     const apply = Object.assign({}, this.state.apply);
//     apply[e.target.name] = e.target.value;
//     this.setState({ apply: apply });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     if (this.handleValidation()) {
//       this.setState({ modalIsOpen: true });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Link to={"/small-dialog"} className="popup-with-zoom-anim button">Погодитись на цю роботу</Link>
//         {/*<a href="#small-dialog" className="popup-with-zoom-anim button">Погодитись на цю роботу</a>*/}
//         <div id="small-dialog" className="zoom-anim-dialog mfp-hide apply-popup">
//           <div className="small-dialog-headline">
//             <h2>Погодитись на цю роботу</h2>
//           </div>
//           <div className="small-dialog-content">
//             <form onSubmit={this.handleSubmit}>
//               <TextInput
//                 type="text"
//                 placeholder="Повне ім'я"
//                 name="name"
//                 value={this.state.apply.name}
//                 onChange={this.handleInputChange} />
//               <div className="clearfixform" />

//               <TextInput
//                 type="email"
//                 name="email"
//                 value={this.state.apply.email}
//                 placeholder="Електронна адреса"
//                 onChange={this.handleInputChange} />
//               <div className="clearfixform" />

//               <textarea
//                 className="WYSIWYG"
//                 id="summary"
//                 value={this.state.apply.description}
//                 onChange={this.handleInputChange}
//                 name="description"
//                 placeholder="Ваше повідомлення / лист, який ви хочете надіслати роботодівцю" />
//               <div className="clearfixform" />

//               <div className="upload-info"><strong>Завантажити ваше резюме</strong> <span>Максимальний розмір файлу: 5MB</span></div>
//               <div className="clearfix" />
//               <label className="upload-btn">
//                 <TextInput
//                   type="file"
//                   name="file"
//                   multiple
//                   value={this.state.apply.file}
//                   onChange={this.handleInputChange} />
//                 <i className="fa fa-upload" />Завантажити
//               </label>
//               <span className="fake-input">Жодний файл не є вибраним</span>
//               <div className="divider" />
//               <button className="send" type="submit">Надіслати заявку</button>
//             </form>
//           </div>
//         </div>
//       </div>

//     );
//   }
// }

export default (ApplyPopup);