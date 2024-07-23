import React from "react";
import NavBar from "../components/NavBar";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RiDownloadLine } from "react-icons/ri";
import { CgRecord } from "react-icons/cg";
import { PiFileVideoLight } from "react-icons/pi";
import { FiVideo } from "react-icons/fi";
import { MdCloudUpload } from "react-icons/md";
import VideosList from "../components/VideosList";

function Home() {
  const handleSelectFiles = () => {
    const fileInput = document.getElementById("fileInput");
    const fileInput1 = document.getElementById("fileInput1");
    const fileInput2 = document.getElementById("fileInput2");
    if (fileInput) {
      fileInput.click();
    }
    else if(fileInput1){
      fileInput1.click();
    }
    else if(fileInput2){
      fileInput2.click();
    }
  };

  return (
    <div>
      <NavBar />
      <div className="d-flex  py-4 px-3 flex-wrap gap-2 justify-content-around align-items-center">
        <div className="btns-group"onClick={handleSelectFiles} >
          <div className="btnIcon" id="btn1">
            <AiOutlineCloudUpload size={20} color="blue" />
          </div>{" "}
          <div className="btn-name">
            <span>
              <b>Upload</b>
            </span>{" "}
            from computer
          </div>
          <input type="file" id="fileInput1"  className="d-none"/>
        </div>

        <div className="btns-group" onClick={handleSelectFiles}>
          <div className="btnIcon" id="btn2">
            <RiDownloadLine size={20} color="brown" />
          </div>{" "}
          <div className="btn-name">
            <span>
              <b>Import</b>
            </span>{" "}
            from drive{" "}
          </div>
          <input type="file" id="fileInput2" className="d-none"/>
        </div>

        <div className="btns-group">
          <div className="btnIcon" id="btn3">
            <CgRecord size={20} color="red" />
          </div>{" "}
          <div className="btn-name">
            <span>
              <b>Record</b>
            </span>{" "}
            screen{" "}
          </div>
        </div>

        <div className="btns-group">
          <div className="btnIcon" id="btn4">
            <PiFileVideoLight size={20} color="blue" />
          </div>{" "}
          <div className="btn-name">
            <span>
              <b>Create</b>
            </span>{" "}
            new video
          </div>
        </div>

        <div className="btns-group">
          <div className="btnIcon" id="btn5">
            <FiVideo size={20} color="green" />
          </div>{" "}
          <div className="btn-name">
            <span>
              <b>Host</b>
            </span>{" "}
            event or webinar
          </div>
        </div>
      </div>

      <div className=" d-flex justify-content-center">
        <div className="col-11 justify-content-center align-items-center d-flex drag&drop ">
          <div>
            <MdCloudUpload size={60} color="gray" />
          </div>
          <div>
            <p className="mb-0">
              Drag and drop videos to upload or select videos{" "}
            </p>
          </div>
          <p>from your device</p>
          <button type="button" className=" btn-selectFiles" onClick={handleSelectFiles}>
            Select files
          </button>
          <input type="file" id="fileInput" className="d-none" />
        </div>
      </div>
      <VideosList />
    </div>

    
  );
}

export default Home;
