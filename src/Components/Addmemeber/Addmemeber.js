import React, { useEffect, useState } from "react";
import "./addmember.css";
import addmemberlogo from "../../assets/addmemberlogo.svg";
import { useNavigate } from "react-router-dom";
import { Useform } from "../../Useform";
import { app } from "../../firebase/Config";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Loding from "../Mianloding/Loding";

function Addmemeber() {
  const navigate = useNavigate();
  const db = getFirestore(app);
  const storage = getStorage(app);
  const [form, setForm] = Useform({
    name: "",
    blood: "O+",
    phone: "",
    cardNo: "",
    address: "",
    DOB: "",
  });
  // set Image
  const [image, setImage] = useState();
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  // set data
  const handleMemberFormSubmit = () => {
    // image Uploading
    setLoading(true)
    if (image) {
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
          console.error("Upload failed:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            console.log(url);
            // data set
            try {
              addDoc(collection(db, "members"), {
                name: form.name,
                blood: form.blood,
                phone: form.phone,
                cardNo: form.cardNo,
                DOB: form.DOB,
                address: form.address,
                imgUrl: downloadURL,
              });
              // alert('succuss')
              navigate("/egasc-dashbord/Members");
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          });
        }
      );
    }else
    {
      try {
        addDoc(collection(db, "members"), {
          name: form.name,
          blood: form.blood,
          phone: form.phone,
          cardNo: form.cardNo,
          DOB: form.DOB,
          address: form.address,
        });
        // alert('succuss')
        navigate("/egasc-dashbord/Members");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };
  
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  },[]);
  return (
    <section className="col-lg-9 col-md-8 col-sm-12 console-side mx-0">
       {loading && <Loding progress={progress} />}
      <div className="p-3">
        <div className="add-member">
          <div className="back-btn" onClick={() => navigate("/egasc-dashbord/Members")}>
            <h6 className="d-inline-flex gap-2">
              <i className="fa-solid fa-arrow-left"></i>Back
            </h6>
          </div>
          <div className="head pt-3 pb-4">
            <div className="d-flex align-items-center gap-3">
              <img src={addmemberlogo} alt="" />
              <h4 className="m-0">Add New Member</h4>
            </div>
          </div>
          <div>
            <form action="">
              <div className="d-flex gap-3 justify-content-center mt-2">
                <div className="w-75">
                  <label className="d-block" for="m-name">
                    Name*
                  </label>
                  <input
                    id="m-name"
                    name="name"
                    value={form.name}
                    type="text"
                    placeholder="Enter Name Here"
                    onChange={setForm}
                  />
                </div>
                <div>
                  <label className="d-block" for="m-blood">
                    Blood
                  </label>
                  <select
                    name="blood"
                    value={form.blood}
                    id="m-blood"
                    placeholder={"blood Group"}
                    onChange={setForm}
                  >
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <label className="d-block" for="m-phone">
                  Phone
                </label>
                <input
                  onChange={setForm}
                  className="w-100"
                  id="m-phone"
                  name="phone"
                  value={form.phone}
                  type="text"
                  placeholder="Enter 10 digit phone number"
                />
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <div>
                    <label className="d-block" for="memberId">
                      Card NO:*
                    </label>
                    <input
                      onChange={setForm}
                      id="memberId"
                      name="cardNo"
                      value={form.cardNo}
                      type="Number"
                      placeholder="Card number"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <label for="birthday">DOB:</label>
                  <input
                    type="date"
                    id="birthday"
                    name="DOB"
                    value={form.DOB}
                    onChange={setForm}
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="d-block" for="m-photo">
                  Profile Photo(optional)
                </label>
                <input
                  className="w-100"
                  id="m-phone"
                  type="file"
                  onChange={handleImageChange}
                />
                {image && (
                  <img
                    className="mt-2"
                    alt="Posts"
                    width="200px"
                    height="200px"
                    src={URL.createObjectURL(image)}
                  ></img>
                )}
              </div>
              <div className="mt-3">
                <label className="d-block" for="m-photo">
                  Address
                </label>
                <textarea
                  name="address"
                  onChange={setForm}
                  value={form.address}
                  id="m-address"
                  cols="10"
                  rows="3"
                  placeholder="Address..."
                ></textarea>
              </div>
              <p className="text-danger m-0">
                *Must Fill Name And Card Number.
              </p>
              <div className="mt-3">
                <button
                  type="button"
                  className="btn add-btn"
                  onClick={handleMemberFormSubmit}
                >
                  Add +
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Addmemeber;
