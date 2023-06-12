import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUsername } from "../../features/user/userAPI";

import "./style.scss";

function Input({ type, label, ...props }) {
  const id = label.replace(/\s+/g, "").toLowerCase();
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input type="text" id={id} name={id} size="15" {...props} />
    </>
  );
}

function EditUserForm() {
  const dispatch = useDispatch();
  const { loading, token, data } = useSelector((state) => state.user);
  const [isFormVisible, setFormVisible] = useState(false);
  const [username, setUsername] = useState("");

  function handleEditButton() {
    setFormVisible(!isFormVisible);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      dispatch(editUsername({ token, username }));
    }
    setFormVisible(!isFormVisible);
  };

  return (
    <>
      {isFormVisible ? (
        <>
          <h1>Edit user info</h1>
          <form className="editUserForm" onSubmit={(e) => handleSubmit(e)}>
            <Input
              label={"User name"}
              placeholder={data?.userName}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              label={"First name"}
              placeholder={data?.firstName}
              disabled
            />
            <Input label={"Last name"} placeholder={data?.lastName} disabled />
            <div className="edit-button-container">
              <button className="edit-button" type="submit">
                Save
              </button>
              <button className="edit-button" onClick={handleEditButton}>
                Cancel
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1>
            Welcome back
            <br /> {data?.firstName} {data?.lastName}!
          </h1>
          <button className="edit-button" onClick={handleEditButton}>
            Edit Name
          </button>
        </>
      )}
    </>
  );
}

function Account({ title, amount }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default function User() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <EditUserForm />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" />
    </main>
  );
}
