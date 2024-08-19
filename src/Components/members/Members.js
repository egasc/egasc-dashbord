import React, { memo, useEffect, useState } from "react";
import "./member.css";
import personlogo from "../../assets/person-logo.svg";
import dummyProfile from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { app } from "../../firebase/Config";
// popup
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import EditPopup from "../Editpopup/EditPopup";
import LoadingList from "../loadingDiv/LoadingList";
// ======================================

function Members() {
  const db = getFirestore(app);
  const navigate = useNavigate();
  const [members, setMemeber] = useState();
  let [memberscount, setMemberscount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "members"));
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMemeber(dataArray);
      setMemberscount(dataArray.length);
    };
    fetchData();
  }, [db, members]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "members", id));
    setMemeber(members.filter((item) => item.id !== id));
  };

  return (
    <section className="col-lg-9 col-md-8 col-sm-12 console-side mx-0">
      <div className="container position-relative">
        <h2>
          Hello <span>Admin</span> 👋🏼
        </h2>
        <div className="row">
          <div className="col-lg-7 col-md-10 colsm-12 d-flex justify-content-md-start mt-3">
            {memberscount ? (
              <div className="total-member-count gap-4">
                <img className="person-image-round" src={personlogo} alt="" />
                <div>
                  <p className="mb-1">Total Members</p>
                  <h3>{memberscount}</h3>
                  {/* dynamic */}
                </div>
              </div>
            ) : (
              <div className="total-member-count gap-4">
              <img className="person-image-round" src={personlogo} alt="" />
              <div>
                <p className="mb-1">Total Members</p>
                <h3>0</h3>
                {/* dynamic */}
              </div>
            </div>
            )}
          </div>
        </div>
        {/* listing-members */}
        <div className="listing-members mt-md-5 mt-4">
          <div className="d-flex justify-content-between">
            <div className="ps-3">
              <h4>All Members</h4>
              <p className="txt-green">Active Members</p>
            </div>
            {/* add member btn */}
            <div
              className="add-member-btn"
              onClick={() => navigate("/Members/Addmember")}
            >
              <i className="fa-solid fa-user-plus"></i>
            </div>
          </div>
          {/* list start form here */}
          <div id="style-9">
            <div className="maping-member">
              <div className="d-flex px-3 mb-1 border-custom_headig">
                <div className="col-1">
                  <p className="m-0 text-sec">card no:</p>
                </div>
                <div className="col-3">
                  <p className="m-0 text-sec">Name</p>
                </div>
                <div className="col-1">
                  <p className="m-0 text-sec">Blood</p>
                </div>
                {/* <div className="col-2">
              <p className="m-0 text-sec">Phone</p>
              </div> */}
                <div className="col-2">
                  <p className="m-0 text-sec ps-md-0 ps-2">DOB</p>
                </div>
                <div className="col-3">
                  <p className="m-0 text-sec">Address</p>
                </div>
                <div className="col-2">
                  <p className="m-0 text-sec">Action</p>
                </div>
              </div>
              {/* =====maping===== */}
              {members ? (
                members.map((value, ind) => {
                  return (
                    <div className="member-block">
                      <div className="row px-2">
                        <div className="col-1 d-flex align-items-center">
                          <p className="m-0">
                            {value.cardNo ? value.cardNo : "NA"}
                          </p>
                        </div>
                        <div className="col-3 d-flex align-items-center gap-4">
                          {value.imgUrl ? (
                            <div
                              className="member-profile"
                              style={{
                                backgroundImage: `url(${value.imgUrl})`,
                              }}
                            ></div>
                          ) : (
                            <div
                              className="member-profile"
                              style={{
                                backgroundImage: `url(${dummyProfile})`,
                              }}
                            ></div>
                          )}

                          <div>
                            <p className="m-0">{value.name}</p>
                            <p className="m-0">
                              {value.phone ? value.phone : "NA"}
                            </p>
                          </div>
                        </div>
                        <div className="col-1 d-flex align-items-center">
                          <p className="m-0">
                            {value.blood ? value.blood : "NA"}
                          </p>
                        </div>
                        <div className="col-2 d-flex align-items-center justify-content-md-start justify-content-center">
                          <p className="m-0">{value.DOB ? value.DOB : "NA"}</p>
                        </div>
                        <div className="col-3 d-flex align-items-center">
                          <p className="m-0 overflow-hidden">
                            {value.address ? value.address : "NA"}
                          </p>
                        </div>
                        <div className="col-2 d-flex align-items-center gap-2">
                          <Popup
                            trigger={
                              <button className="edit-btn" onClick={() => {}}>
                                <i className="fa-solid fa-pen-to-square"></i>
                              </button>
                            }
                          >
                            {(close) => (
                              <EditPopup
                                name={value.name}
                                phone={value.phone}
                                address={value.address}
                                blood={value.blood}
                                profile={
                                  value.profileUrl
                                  ? value.profileUrl
                                  : dummyProfile
                                }
                                DOB={value.DOB}
                                memberId={value.cardNo}
                                id={value.id}
                                close={close}
                              />
                            )}
                          </Popup>
                          <button
                            className="delt-btn"
                            type="button"
                            onClick={() => handleDelete(value.id)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                 <LoadingList/>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Members);
