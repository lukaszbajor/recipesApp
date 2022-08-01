import React, { FC, useState } from "react";
import styles from "./Recipe.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import { ToastContainer, toast } from "react-toastify";

interface Props {
  remove: (id: string | undefined) => void;

  recipes: {
    id: string;
    title: string;
    ingredients: string;
    desc: string;
    date: string;
  }[];
}
const Recipe: FC<Props> = ({ recipes, remove }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const removeRecipe = () => {
    setTimeout(() => {
      remove(id);
      navigate("/recipesApp/recipes");
    }, 5000);
    toast("Usuwanie...");
  };
  const toEdit = () => {
    navigate(`/recipesApp/recipes/${id}/editrecipe`);
  };

  return (
    <>
      <div className={styles.boxBtns}>
        <Button onClick={removeRecipe}>Usuń</Button>
        <Button onClick={toEdit}>Edytuj</Button>
        <Button
          onClick={() => {
            navigate(`/recipesApp/recipes`);
          }}
          className={styles.back}
        >
          Wróć
        </Button>
      </div>

      {recipes.map((el) => {
        if (el.id === id) {
          return (
            <Wrapper key={el.id} className={styles.box}>
              <Card className={styles.card}>
                <p className={styles.title}>{el.title}</p>
                <p className={styles.ingredients}>
                  <span>Składniki: </span>
                  {el.ingredients}
                </p>
                <p className={styles.desc}>
                  {" "}
                  <span>Przygotowanie: </span>
                  {el.desc}
                </p>
                <p className={styles.date}>{el.date}</p>
              </Card>
            </Wrapper>
          );
        }
      })}
    </>
  );
};

export default Recipe;
