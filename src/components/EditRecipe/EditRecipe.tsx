import React, { FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../UI/Card/Card";
import Subtitle from "../UI/Subtitle/Subtitle";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Form from "../UI/Form/Form";
import styles from "./EditRecipe.module.css";
import { ToastContainer, toast } from "react-toastify";

interface Props {
  edit: (
    id: string | undefined,
    newTitle: string,
    newDate: string,
    newDesc: string,
    newIngredients: string
  ) => void;
  recipes: {
    id: string;
    title: string;
    ingredients: string;
    desc: string;
    date: string;
  }[];
}
const EditRecipe: FC<Props> = ({ recipes, edit }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [newTitle, setNewTitle] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newDate, setNewDate] = useState("");

  const editRecipe = (e: any) => {
    e.preventDefault();
    toast("Edytowanie...");
    setTimeout(() => {
      edit(id, newTitle, newIngredients, newDesc, newDate);
      navigate(`/recipes/${id}`);
    }, 5000);
  };
  useEffect(() => {
    setNewTitle(recipes[Number(id) - 1].title);
    setNewIngredients(recipes[Number(id) - 1].ingredients);
    setNewDesc(recipes[Number(id) - 1].desc);
    setNewDate(recipes[Number(id) - 1].date);
  }, []);

  return (
    <>
      {recipes.map((el) => {
        if (el.id === id) {
          return (
            <Card key={el.id}>
              <Form className={styles.addForm} onSubmit={editRecipe}>
                <Subtitle className={styles.title}>Edytuj przepis</Subtitle>
                <Input
                  value={newTitle}
                  type="text"
                  onChange={(e) => {
                    setNewTitle(e.target.value);
                  }}
                />
                <Textarea
                  value={newIngredients}
                  onChange={(e) => {
                    setNewIngredients(e.target.value);
                  }}
                />
                <Textarea
                  className={styles.textarea}
                  value={newDesc}
                  onChange={(e) => {
                    setNewDesc(e.target.value);
                  }}
                />
                <Input
                  value={newDate}
                  type="date"
                  onChange={(e) => {
                    setNewDate(e.target.value);
                  }}
                />
                <input type="submit" value="Edytuj" />
              </Form>
            </Card>
          );
        }
      })}
      <div className={styles.boxBack}>
        <Button
          onClick={() => {
            navigate(`/recipes/${id}`);
          }}
          className={styles.back}
        >
          Wróć
        </Button>
      </div>
    </>
  );
};

export default EditRecipe;
