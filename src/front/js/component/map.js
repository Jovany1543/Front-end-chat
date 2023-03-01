import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

// Define the Marker component
const Marker = (props) => (
  <div className="justify-content-evenly" style={{ color: props.color }}>
    <i class="fa-solid fa-location-dot fa-2xl">
      {" "}
      <h6 className="m-3">{props.name}</h6>
    </i>
  </div>
);

export const Map = () => {
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            zoom: 12,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }, []);

  const [guys, setGuys] = useState([
    {
      id: 1,
      lat: 28.5484,
      lng: -81.3189,
      name: "jordan",
      age: 21,
      zipcode: "00923",
    },
    {
      id: 2,
      lat: 28.5684,
      lng: -81.3589,
      name: "Michael",
      age: 23,
      zipcode: "32822",
    },
    {
      id: 3,
      lat: 28.5584,
      lng: -81.3989,
      name: "Christian",
      age: 31,
      zipcode: "34744",
    },
    {
      id: 4,
      lat: 28.5784,
      lng: -81.3789,
      name: "Josh",
      age: 27,
      zipcode: "32822",
    },
  ]);
  const [girls, setGirls] = useState([
    {
      id: 1,
      lat: 28.5384,
      lng: -81.3989,
      name: "Laura",
      age: 24,
      zipcode: "00923",
    },
    {
      id: 2,
      lat: 28.5384,
      lng: -81.3489,
      name: "Lisa",
      age: 23,
      zipcode: "32822",
    },
    {
      id: 3,
      lat: 28.5784,
      lng: -81.3589,
      name: "Sarah",
      age: 34,
      zipcode: "34744",
    },
    {
      id: 3,
      lat: 28.5984,
      lng: -81.3549,
      name: "Zoharie",
      age: 29,
      zipcode: "34744",
    },
  ]);

  if (!userPosition) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={userPosition.center}
        defaultZoom={userPosition.zoom}
      >
        {guys
          //   .filter((item) => item.age > 30)
          .map((marker) => {
            return (
              <Marker
                color="blue"
                key={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                name={marker.name}
              />
            );
          })}
        {girls
          //   .filter((item) => item.age < 25)
          .map((marker) => {
            return (
              <Marker
                color="red"
                key={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                name={marker.name}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => (
//   <div>
//     <i class="fa-solid fa-location-dot fa-2xl"></i>
//   </div>
// );

// export default function SimpleMap() {
//   const [userPosition, setUserPosition] = useState(null);

//   const defaultProps = {
//     center: {
//       lat: 25.761681,
//       lng: -80.191788,
//     },
//     zoom: 11,
//   };

//   const apiIsLoaded = (map, maps, places) => {
//     // Get bounds by our places
//     const bounds = getMapBounds(map, maps, places);
//     // Fit map to bounds
//     map.fitBounds(bounds);
//     // Bind the resize listener
//     bindResizeListener(map, maps, bounds);
//   };

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserPosition({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//     } else {
//       console.log("Geolocation is not supported by this browser");
//     }
//   });

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "88vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{
//           key: "AIzaSyDW_XLxh1AnGsFRN5FgZ-n_x8A5E-jEtKo",
//         }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />

//         {userPosition && (
//           <AnyReactComponent
//             lat={userPosition.lat}
//             lng={userPosition.lng}
//             text="Your Location"
//           />
//         )}
//       </GoogleMapReact>
//     </div>
//   );
// }
