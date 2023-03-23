import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  //States
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  //Form submission
  const addUserHandle = (event) => {
    event.preventDefault();

    //Validation

    if (enteredUsername === 0 || enteredAge === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  //Input state for username
  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  //Input state for age
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong" />
      <Card className={styles.input}>
        <form onSubmit={addUserHandle}>
          <label htmlFor="username">User name</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years) </label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
