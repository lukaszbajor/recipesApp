import React, { FC, useState } from "react";
import styles from "./AddRecipe.module.css";
import Card from "../../components/UI/Card/Card";
import Form from "../../components/UI/Form/Form";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Textarea from "../../components/UI/Textarea/Textarea";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";

interface Props {
  add: (title: string, date: string, desc: string, ingredients: string) => void;
}

const AddRecipe: FC<Props> = ({ add }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [ingredients, setIngredients] = useState("");

  const addRecipe = (e: any) => {
    e.preventDefault();
    toast("Dodawanie...");
    setTimeout(() => {
      add(title, date, desc, ingredients);
      navigate("/recipes");
    }, 5000);
  };

  return (
    <>
      <Card className={styles.card}>
        <Form className={styles.addForm} onSubmit={addRecipe}>
          <Subtitle className={styles.title}>Dodaj przepis</Subtitle>
          <Input
            type="text"
            placeholder="Tytuł"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Textarea
            placeholder="Składniki..."
            onChange={(e) => {
              setIngredients(e.target.value);
            }}
          />
          <Textarea
            className={styles.textarea}
            placeholder="Sposób przygotowania..."
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <Input
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <input type="submit" value="Dodaj" />
        </Form>
      </Card>
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
    </>
  );
};

export default AddRecipe;
