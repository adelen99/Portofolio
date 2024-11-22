import Particles from "react-tsparticles";

const StarryBackground = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    >
      <Particles
        options={{
          particles: {
            number: {
              value: 200, // numărul de particule (stele)
            },
            size: {
              value: 3, // dimensiunea particulelor
            },
            move: {
              enable: true,
              speed: 0.5, // viteza particulelor
            },
            line_linked: {
              enable: false, // nu le conectăm
            },
            opacity: {
              value: 0.5, // transparența particulelor
            },
            shape: {
              type: "circle", // formă particulelor
            },
            color: {
              value: "#ffffff", // culoarea particulelor
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse", // particulele se îndepărtează când treci cu mouse-ul
              },
            },
          },
        }}
      />
    </div>
  );
};

export default StarryBackground;
