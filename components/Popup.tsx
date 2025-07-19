import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface PopupProps {
  innerColor?: string;
  setInnerColor: React.Dispatch<React.SetStateAction<string>>;
  outerColor?: string;
  setOuterColor: React.Dispatch<React.SetStateAction<string>>;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RowProps {
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
  innerColor = "#000000",
  setInnerColor,
  outerColor = "#ffffff",
  setOuterColor,
  showPopup,
  setShowPopup,
}) => {
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setShowPopup(false);
  };

  const handleInnerColorChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInnerColor(e.target.value);
  };

  const handleOuterColorChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOuterColor(e.target.value);
  };

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setShowPopup(false);
  };

  return (
    <div
      className={`absolute top-0 left-0 flex justify-center items-center w-screen h-screen ${
        showPopup ? "flex" : "hidden"
      } bg-neutral-950/80`}
    >
      <div
        className={`z-10 h-fit min-w-sm bg-blue-950 shadow-2xl backdrop:blur-2xl border-2 border-white/20 rounded-xl flex-col p-2 relative`}
      >
        <button
          className="flex justify-end text-red-600"
          onClick={handleCloseClick}
        >
          <IoIosCloseCircleOutline className="text-2xl absolute right-2 top-2 hover:text-white transition" />
        </button>
        <div className="text-center text-2xl font-black text-blue-100 mt-2">
          OPTIONS
        </div>
        <p className="mx-4 px-4 py-2 font-semibold text-xl bg-red-500/20 text-red-300 rounded-md my-4">
          Colors
        </p>
        <div className="flex flex-col gap-4">
          <Row>
            <label htmlFor="color" className="flex-1/2 py-2 px-4">
              Inner Color
            </label>
            <div className="flex-1/2">
              <input
                type="color"
                name="color"
                value={innerColor}
                className="w-full h-full scale-125"
                onChange={handleInnerColorChange}
              />
            </div>
          </Row>
          <Row>
            <label htmlFor="color" className="flex-1/2 py-2 px-4 ">
              Outer Color
            </label>
            <div className="flex-1/2">
              <input
                type="color"
                name="color"
                className="h-full w-full scale-125"
                value={outerColor}
                onChange={handleOuterColorChange}
              />
            </div>
          </Row>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-green-600 px-8 py-2 rounded-full w-fit my-4"
            onClick={handleApplyClick}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

const Row: React.FC<RowProps> = ({ children })=> {
  return (
    <div className="rounded-2xl flex bg-white/20 overflow-hidden mx-8 border-neutral-200 border">
      {children}
    </div>
  );
};
