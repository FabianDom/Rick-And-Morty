import Card from "../Card/Card";
import Styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={Styles.div}>
      <div className={Styles.cards}>
        {characters.map((card) => {
          return (
            <Card
              id={card.id}
              name={card.name}
              species={card.species}
              gender={card.gender}
              image={card.image}
              onClose={() => props.onClose(card.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
