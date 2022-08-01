import React, { FC } from "react";
import Option from "../../components/Option/Option";
import Button from "../../components/UI/Button/Button";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Card from "../../components/UI/Card/Card";
import Text from "../../components/UI/Text/Text";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  let navigate = useNavigate();
  return (
    <Wrapper>
      <Subtitle className={styles.info}>
        Witaj w naszej aplikacji, sprawdź nasze przepisy, dodaj własny bądź
        edytuj te, które już są.
      </Subtitle>
      <Card className={styles.box}>
        <Option>
          <Subtitle>Przepisy</Subtitle>
          <Text className={styles.text}>Spawdź nasze przepisy!</Text>
          <Button
            onClick={() => {
              navigate("/recipesApp/recipes");
            }}
            className={styles.xd}
          >
            Sprawdź
          </Button>
        </Option>
        <Option>
          <Subtitle>Dodaj przepis</Subtitle>
          <Text className={styles.text}>Dodaj swój przepis!</Text>
          <Button
            onClick={() => {
              navigate("/recipesApp/addrecipe");
            }}
            className={styles.xd}
          >
            Dodaj
          </Button>
        </Option>
      </Card>
    </Wrapper>
  );
};

export default Home;
