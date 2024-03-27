import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "./GoogleMap.module.css"
import stylesSchool from "../pages/school-page.module.css";
import marker from '../public/group-1000008452.svg'
import Image from "next/image"
import { useRouter } from "next/router";

const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const defaultProps = {
  center: {
    lat: 27.68333333333,
    lng: -81.733333333333,
  },
  zoom: 10,
};

const points = [
  { id: 1, name: "Washington International School", lat: 27.68333333333, lng: -81.233333333333 },
  { id: 2, name: "Capital Hill Cluster School", lat: 27.88333333333, lng: -81.983333333333 },
  { id: 3, name: "Janney Elementary School", lat: 27.58333333333, lng: -81.983333333333 }
];

const GoogleMap = () => {
  const router = useRouter();

  const handleNode = () => {
    router.push('/nodes-page')
  }

  const Marker = ({ name, number }) => (

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
              >{name}</div>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image loading="lazy" src={marker} alt="Mark" />
      </div>
      <div className={styles.markerNumber}>
        <div className={styles.circle}>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ 'width': "100%", 'height': 600 }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCEa-1ONGIl6kjqUaG2pe8Jx_xArDFs6s0",
          language: "en",
          region: "US"
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        distanceToMouse={distanceToMouse}
      >
        {points.map(({ lat, lng, id, name, title }) => {
          return (
            <Marker key={id} lat={lat} lng={lng} name={name} number={id + 4} />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;

