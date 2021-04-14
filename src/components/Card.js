function Card(props) {
	function handleClick() {
		props.onCardClick(props.card);
	}  
	return (
		<li className="card">
			<img onClick={handleClick} className="card__pic" alt="неопределено" src={props.card.link} />
			<div className="card__info">
				<h2 className="card__title">{props.card.name}</h2>
				<div className="card__like-container">
					<button className="card__like" aria-label="Нравится" type="button"></button>
					<span className="card__likes">{props.card.likes.length}</span>
				</div>
			</div>
		</li>
	)	
}
export default Card