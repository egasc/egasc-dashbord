import React, { useEffect } from "react";
import "./editpopup.css";
import { Useform } from "../../Useform";
import { app } from "../../firebase/Config";
import { doc, updateDoc, getFirestore } from "firebase/firestore";

function EditPopup({
  name,
  phone,
  blood,
  address,
  profile,
  DOB,
  memberId,
  close,
  id,
}) {
  const [form, setForm] = Useform({
    name: name,
    blood: blood,
    phone: phone,
    cardNo: memberId,
    address: address,
    dob: DOB,
  });
  const db = getFirestore(app);

  const handleUpdat = async () => {
    try {
      const docRef = doc(db, "members", id);
      await updateDoc(docRef, {
        name: form.name,
        blood: form.blood,
        phone: form.phone,
        cardNo: form.cardNo,
        DOB: form.dob,
        address: form.address,
      });
      // console.log('Document updated successfully');
      close();
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  useEffect(() => {}, [id]);
  return (
    <div className="editform">
      <div className="form-container">
        <h2>Edit Information</h2>
        <form action="">
          <div>
            <div className="d-felx justify-content-center">
              <div class="file-input">
                <input
                  type="file"
                  name="photo"
                  id="file-input"
                  class="file-input__input"
                />
                <label
                  class="file-input__label"
                  for="file-input"
                  style={{ backgroundImage: `url(${profile})` }}
                ></label>
              </div>
            </div>
            <div>
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                onChange={setForm}
                name="name"
                value={form.name}
                required
              />
            </div>
            <div>
              <label for="blood-group">Blood Group:</label>
              <input
                type="text"
                id="blood-group"
                name="blood"
                onChange={setForm}
                value={form.blood}
                required
              />
            </div>
          </div>
          <label for="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            onChange={setForm}
            name="phone"
            value={form.phone}
            required
          />
          <div className="d-flex gap-2">
            <div>
              <label for="memberId">Card No:</label>
              <input
                type="number"
                id="memberId"
                name="cardNo"
                onChange={setForm}
                value={form.cardNo}
                required
              />
            </div>
            <div>
              <label for="memberId">DOB</label>
              <input
                type="date"
                id="dob"
                name="dob"
                onChange={setForm}
                value={form.dob}
                required
              />
            </div>
          </div>
          <label for="address">Address:</label>
          <textarea
            id="address"
            name="address"
            onChange={setForm}
            value={form.address}
            required
          ></textarea>
          <div className="d-flex gap-2 mt-2">
            <button
              type="button"
              className="edit-submit-btn"
              onClick={handleUpdat}
            >
              Update
            </button>
            <button
              type="button"
              className="edit-close-btn"
              onClick={() => close()}
            >
              close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPopup;
