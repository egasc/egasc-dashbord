import React, { useEffect, useState } from "react";
import "./editpopup.css";
import { Useform } from "../../Useform";
import { app } from "../../firebase/Config";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loding from "../Mianloding/Loding";
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
  const [image, setImage] = useState();
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const db = getFirestore(app);
  const [loading, setLoading] = useState(false);
  const storage = getStorage(app);

  const handleUpdat = async () => {
    if (image) {
      setLoading(true)
      const storageRef = ref(storage, `profile/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(Math.round(progress));
          console.log(progress);
        },
        (error) => {
          setLoading(false)
          console.error("Upload failed:", error);
        },
        // --------
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            console.log(url);
            // data set
            try {
              const docRef = doc(db, "members", id);
               updateDoc(docRef, {
                name: form.name,
                blood: form.blood,
                phone: form.phone,
                cardNo: form.cardNo,
                DOB: form.dob,
                address: form.address,
                imgUrl: downloadURL,
              });
              close();
              // alert('succuss')
            } catch (e) {
              console.error("Error updating document: ", e);
            }
          });
        }
      );
    }
    else{
      try {
        const docRef = doc(db, "members", id);
        await updateDoc(docRef, {
          name: form.name,
          blood: form.blood,
          phone: form.phone,
          cardNo: form.cardNo,
          DOB: form.dob,
          address: form.address
        });
        // console.log('Document updated successfully');
        close();
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  useEffect(() => {}, [id]);
  return (
    <div className="editform">
       {loading && <Loding progress={progress} />}
      <div className="form-container">
        <h2>Edit Information</h2>
        <form action="">
          <div>
            <div className="d-felx justify-content-center">
              <div className="file-input">
                <input
                  type="file"
                  name="photo"
                  id="file-input"
                  className="file-input__input"
                  onChange={handleImageChange}
                />
                <label
                  className="file-input__label"
                  for="file-input"
                  style={{backgroundImage: image ? `url(${URL.createObjectURL(image)})` : `url(${profile})`}}
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
