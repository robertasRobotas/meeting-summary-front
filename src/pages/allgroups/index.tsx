import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import Link from "next/link";
const AllGroupsPage = () => {
  const [groups, setGroups] = useState([]);
  const fetchUserGroups = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/groups/${localStorage.getItem(
          "meetingSummaryUserId"
        )}`,
        {
          headers: {
            authorization: localStorage.getItem("meetingSummaryToken"),
          },
        }
      );
      console.log("response", response);
      setGroups(response.data.user.user_groups);
    } catch (err) {
      console.log("err", err);
    }
  };
  console.log("groups", groups);
  useEffect(() => {
    fetchUserGroups();
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <h1>All Groups</h1>
        <button>+</button>
        <h3>"User Name"</h3>
      </div>

      <div className={styles.groupWrapper}>
        {groups.map((group) => (
          //   @ts-ignore
          <Link
            href={`/group/${group.id}`}
            className={styles.group}
            key={group.id}
          >
            {/* 
// @ts-ignore */}
            {group.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllGroupsPage;
