import React from "react";
import GoogleMapReact from "google-map-react";
import marker from '../public/group-1000008452.svg'
import Image from "next/image";
import styles from "./GoogleMap.module.css"
import stylesSchool from "../pages/school-page.module.css";
import { useRouter } from "next/router";

const GoogleMap = () => {
  const router = useRouter();

  const handleNode = () => {
    router.push('/nodes-page')
  }

  const Marker = () => (
    <div className={styles.markerContainer}>
      <div className={stylesSchool.frameContainer}>
        <div className={stylesSchool.frameDiv}>
          <div className={stylesSchool.polygonParent}>
            <img
              className={stylesSchool.frameInner}
              loading="lazy"
              alt=""
              src="/polygon-2.svg"
            />
            <button
              className={stylesSchool.washingtonInternationalSchooWrapper}
              onClick={() => handleNode()}
            >
              <div
                className={stylesSchool.washingtonInternationalSchoo}
              >{`Washington International School `}</div>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image loading="lazy" src={marker} alt="Mark" />
      </div>
      <div className={styles.markerNumber}>
        <div className={styles.circle}>
          <p>9</p>
        </div>
      </div>
    </div>
  );

  const defaultProps = {
    center: {
      lat: 27.68333333333,
      lng: -81.733333333333,
    },
    zoom: 10,
  };

  return (
    <div style={{ 'width': "100%", 'height': 600 }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCEa-1ONGIl6kjqUaG2pe8Jx_xArDFs6s0',
          language: 'en',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={27.68333333333} lng={-81.233333333333} />
        <Marker lat={27.88333333333} lng={-81.983333333333} />
        <Marker lat={27.58333333333} lng={-81.983333333333} />
      </GoogleMapReact>
    </div>
  );
};
export default GoogleMap;