const AddUser = () => {
  const addUserHandle = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandle}>
      <label htmlFor="username">User name</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
