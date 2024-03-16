import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { useState } from "react";
import styles from "./link-label.module.css";

export type LinkLabelType = {
  fichevronDown?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propDisplay1?: CSSProperties["display"];
  propDisplay2?: CSSProperties["display"];
  propDisplay3?: CSSProperties["display"];
  propDisplay4?: CSSProperties["display"];
  propColor?: CSSProperties["color"];
  propDisplay5?: CSSProperties["display"];
};

const LinkLabel: NextPage<LinkLabelType> = ({
  fichevronDown,
  propDisplay,
  propDisplay1,
  propDisplay2,
  propDisplay3,
  propDisplay4,
  propColor,
  propDisplay5,
}) => {
  const device1InitializingStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const device1DetectedStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const device2CallingStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const device25InactiveStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const commandStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay4,
    };
  }, [propDisplay4]);

  const selectCommandStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay5,
    };
  }, [propColor, propDisplay5]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const onSelectChange = (e: any) => {
    console.log(e.target.value);
  };

  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // const toggleDropdown = () => setIsOpen(!isOpen);

  // const handleSelectOption = (option: string) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };

  return (
    <div className={styles.linkLabel}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.device1InitializingWrapper}>
          <div
            className={styles.device1Initializing}
            style={device1InitializingStyle}
          >
            Device 1 Initializing...
          </div>
        </div>
        <div className={styles.device1DetectedWrapper}>
          <div className={styles.device1Detected} style={device1DetectedStyle}>
            Device 1 Detected...
          </div>
        </div>
        <div className={styles.device2CallingWrapper}>
          <div className={styles.device2Calling} style={device2CallingStyle}>
            Device 2 Calling...
          </div>
        </div>
        <div className={styles.device25InactiveWrapper}>
          <div
            className={styles.device25Inactive}
            style={device25InactiveStyle}
          >
            Device 25 Inactive...
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.commandWrapper}>
            <div className={styles.command} style={commandStyle}>
              Command:
            </div>
          </div>
          <input type="text" className={styles.frameItem} />
          <button className={styles.button}>
            <img className={styles.maskedIcon} alt="" src="/masked-icon.svg" />
            <div className={styles.send}>Send</div>
            <img className={styles.maskedIcon1} alt="" src="/masked-icon.svg" />
          </button>
        </div>
        <select
          name=""
          id=""
          className={styles.frameContainer}
          onChange={onSelectChange}
        >
          <option value="none" disabled selected>
            - Select Command -
          </option>
          <option value="1">Command 1</option>
          <option value="2">Command 2</option>
          <option value="3">Command 3</option>
        </select>
        {/* <div className={styles.frameContainer}>
          <div className={styles.selectCommandWrapper}>
            <div className={styles.selectCommand} style={selectCommandStyle}>
              Select Command
            </div>
          </div>
          <img
            className={styles.fichevronDownIcon}
            alt=""
            src={fichevronDown}
          />
        </div> */}
      </div>
    </div>
  );
};

export default LinkLabel;
