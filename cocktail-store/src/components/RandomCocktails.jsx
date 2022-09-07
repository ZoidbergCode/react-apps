import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../styles/RandomCocktails.scss';
import Title1 from './UI/Title1/Title1';

const RandomCocktails = () => {
  const [randOne, setRandOne] = useState([]);
  const [ings, setIngs] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => {
        const tempArray = [];
        console.log(response.data.drinks[0]);
        setRandOne(response.data.drinks[0]);
        for (let i = 1; i <= 15; i++) {
          if (response.data.drinks[0]['strIngredient' + i]) {
            tempArray.push(response.data.drinks[0]['strIngredient' + i]);
            setIngs(tempArray);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="random">
      <Title1>Random Cocktail</Title1>
      <div className="random__container">
        <div className="cocktail__column">
          <div className="coctail__item">
            <div className="cocktail__image">
              <img src={randOne.strDrinkThumb} alt={randOne.strDrink} />
            </div>
            <h4 className="cocktail__title">{randOne.strDrink}</h4>
            <ul className="cocktail__list">
              <li
                style={
                  randOne.strAlcoholic === 'Alcoholic' ? { color: '#d83f2a' } : { color: 'green' }
                }
                className="cocktail__list-item">
                <strong>{randOne.strAlcoholic}</strong>
              </li>
              <span>Ingredients: </span>
              {ings.map((ing) => {
                return <li className="coctail__list-item list-item">{ing}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomCocktails;
