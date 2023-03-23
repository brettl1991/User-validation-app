import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./AddUser.module.css";

const AddUser = () => {
  const addUserHandle = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandle}>
        <label htmlFor="username">User name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
