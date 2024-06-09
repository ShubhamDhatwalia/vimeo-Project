import React from "react";
import { SlCloudUpload } from "react-icons/sl";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsRecordCircle } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import "./css/NewbtnPop.css";

function NewbtnPop({ isOpen, closeNewbtnPop }) {

  const handleListClick = () => {
    closeNewbtnPop();
  };

  return (
    <>
      <div>
        <ul className={`new-list ${isOpen ? "show" : ""}`}>
          <li className="new-list-item" onClick={handleListClick}>
            <SlCloudUpload size={20} className="newlistIcon"/>  &nbsp; Upload
          </li>
          <li className="new-list-item"onClick={handleListClick}>
            <AiOutlineVideoCameraAdd size={20} className="newlistIcon"/> &nbsp; Create video
          </li>
          <li className="new-list-item"onClick={handleListClick}>
            <BsRecordCircle size={20} className="newlistIcon" /> &nbsp; Record video
          </li>
          <li className="new-list-item"onClick={handleListClick}>
            <IoVideocamOutline size={20} className="newlistIcon"/> &nbsp; Host video
          </li>
        </ul>
      </div>
    </>
  );
}

export default NewbtnPop;
