import api from "../utils/api";
import React from 'react';
import Card from './Card';
function Main(props) {
	const [userName, setUserName] = React.useState("")
	const [userDescription, setUserDescription] = React.useState("")
	const [userAvatar, setUserAvatar] = React.useState("")
	const [cards, setCards] = React.useState([])

	React.useEffect(() => {
    api.getUserInfo()
			.then((dataOfUser) => {
				setUserName(dataOfUser.name);
				setUserAvatar(dataOfUser.avatar);
				setUserDescription(dataOfUser.about)
			}).catch((err) => {console.log(err)})
		api.getInitialCards()
			.then((data) => {setCards(data)})
			.catch((err) => {console.log(err)});
	})
	return (
		<main className="content">
			<section className = "profile">
				<img className = "profile__avatar" src={userAvatar} alt="портрет" />
				<button onClick={props.onEditAvatar} className = "profile__avatar-overlay" type="button" aria-label="Редактировать аватар"></button>
				<h1 className = "profile__name">{userName}</h1>
				<button onClick={props.onEditProfile} className="profile__edit-button" type="button" aria-label="Редактировать"></button>
				<p className="profile__about">{userDescription}</p>
				<button onClick={props.onAddPlace} className="profile__add-button" aria-label="Добавить" type="button"></button>
			</section>
			
			<section className="places">
				<ul className="places__list">
					{cards.map((card, i) => { return (
						<Card onCardClick={props.onCardClick} key={card._id} card={card} />
					)})}
				</ul>
			</section>
		</main>
	)	
}
export default Main;