//import logo from './logo.svg';
import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleCardClick(card) {
    setSelectedCard(card)
  }
  function handleEditAvatarClick(e) {
    setIsEditAvatarPopupOpen(true)
	}
	
	function handleEditProfileClick(e) {
    setIsEditProfilePopupOpen(true)
	}
	
	function handleAddPlaceClick(e) {
    setIsAddPlacePopupOpen(true)
	}
  function closeAllPopups(e) {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({})
  }
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer />
        <PopupWithForm onClose={closeAllPopups} isOpen = {isEditProfilePopupOpen} name="edit" title="Редактировать профиль" button="Сохранить">
          <input className="popup__input popup__input_content_name" type="text" defaultValue="" id="name-input" name="name" required minLength="2" maxLength="40" />
          <span className="name-input-error popup__input-error"></span>
          <input className="popup__input popup__input_content_job" type="text" defaultValue="" id="job-input" name="about" required minLength="2" maxLength="200" />
          <span className="job-input-error popup__input-error"></span>
        </PopupWithForm>
        <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="add" title="Новое место" button="Создать">
          <input className="popup__input popup__input_content_label" type="text" id="label-input" defaultValue="" placeholder="Название" name="name" required minLength="2" maxLength="30" />
          <span className="label-input-error popup__input-error"></span>
          <input className="popup__input popup__input_content_link" type="url" id="link-input" defaultValue="" placeholder="Ссылка на картинку" name="link" required />
          <span className="link-input-error popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="avatar" title="Обновить аватар" button="Сохранить">
          <input className="popup__input popup__input_content_avatar" type="url" id="avatar-input" defaultValue="" placeholder="Ссылка на аватар" name="avatar" required />
          <span className="avatar-input-error popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="confirm" title="Вы уверены?" button="Да">
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;
