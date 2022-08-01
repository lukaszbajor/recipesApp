import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Button from "../../components/UI/Button/Button";
import styles from "./Recipes.module.css";
import Card from "../../components/UI/Card/Card";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Text from "../../components/UI/Text/Text";
interface Props {
  recipes: {
    id: string;
    title: string;
    ingredients: string;
    desc: string;
    date: string;
  }[];
}
const Recipes: FC<Props> = ({ recipes }) => {
  let navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Subtitle className={styles.info}>Sprawdź nasze przepisy:</Subtitle>

        <div className={styles.boxBack}>
          <Button
            onClick={() => {
              navigate(`/`);
            }}
            className={styles.back}
          >
            Wróć
          </Button>
        </div>
        {recipes.length === 0 ? (
          <Text className={styles.text}>Brak przepisów</Text>
        ) : (
          <Card className={styles.card}>
            {recipes.map((recipe) => {
              return (
                <div className={styles.box} key={recipe.id}>
                  <h3 className={styles.title}>{recipe.title}</h3>

                  <p className={styles.ingredients}>
                    <span>Składniki: </span>{" "}
                    {recipe.ingredients.slice(0, 15) + "..."}
                  </p>
                  <p className={styles.desc}>
                    <span>Przygotowanie: </span>{" "}
                    {recipe.desc.slice(0, 15) + "..."}
                  </p>
                  <p className={styles.date}>{recipe.date}</p>

                  <Button
                    onClick={() => {
                      navigate(`/recipes/${recipe.id}`);
                    }}
                    className={styles.btn}
                  >
                    Sprawdź
                  </Button>
                </div>
              );
            })}
          </Card>
        )}
      </Wrapper>
    </>
  );
};

export default Recipes;
