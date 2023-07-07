import React, { useRef, useEffect } from "react";
import paper from "paper";
import CanvasOverlay from "./CanvasOverlay";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    paper.setup(canvas);

    const view = paper.view;
    const viewSize = paper.view.size; // Get the size of the viewport
    const mobileViewHeight = window.innerHeight; // Get the size of the viewport

    if (window.innerWidth < 768) {
      viewSize.height = mobileViewHeight;
    }

    const topLeft = new paper.Point(0, 0); // Top-left corner of the viewport
    const bottomRight = new paper.Point(viewSize.width, viewSize.height); // Bottom-right corner of the viewport

    const gradientStart = new paper.Point(0, viewSize.height / 2); // Left-center point of the viewport
    const gradientEnd = new paper.Point(viewSize.width, viewSize.height / 2); // Right-center point of the viewport

    // Create a rectangle shaped path between
    // the topLeft and bottomRight points:
    var bg = new paper.Path.Rectangle({
      topLeft: topLeft,
      bottomRight: bottomRight,
      // Fills the background with a gradient
      fillColor: {
        gradient: {
          stops: ["#fbc26d", "#8e1b2e"],
        },
        origin: gradientStart,
        destination: gradientEnd,
      },
    }); // array of paths
    const paths = [];

    // values for each path
    const pathGen = [
      {
        colorStart: "#d3192e",
        colorEnd: "#22006a",
        opacity: 0.7,
        points: 3,
        height: 1, // 1 is the middle of the screen, 0 is the bottom
        anchorLeft: 1, //height of the left anchor point
        anchorRight: 0.8, //height of the right anchor point
      },
      {
        colorStart: "#bc1038",
        colorEnd: "#1e2672",
        opacity: 0.7,
        points: 3,
        height: 0.8,
        anchorLeft: 0.8,
        anchorRight: 0.7,
      },
      {
        colorStart: "#a5123f",
        colorEnd: "#202c81",
        opacity: 0.7,
        points: 3,
        height: 0.6,
        anchorLeft: 0.7,
        anchorRight: 0.6,
      },
      {
        colorStart: "#83173e",
        colorEnd: "#000050",
        opacity: 0.7,
        points: 3,
        height: 0.4,
        anchorLeft: 0.6,
        anchorRight: 0.5,
      },
    ];

    // Path 1. The tallest one
    var center, width, height;
    var pathHeight = 30;
    initializePath();

    function initializePath() {
      center = view.center;
      width = viewSize.width;
      height = viewSize.height;

      pathGen.forEach((path, index) => {
        let p = new paper.Path();
        let anchorLeft = 1 + (1 - path.anchorLeft);
        let anchorRight = 1 + (1 - path.anchorRight);

        let bottomLeft = new paper.Point(0, height);
        let topLeft = new paper.Point(0, (height / 2) * anchorLeft);
        let topRight = new paper.Point(width, (height / 2) * anchorRight);
        let bottomRight = new paper.Point(width, height);

        p.segments = [];
        p.add(bottomLeft, topLeft);
        for (var i = 1; i < path.points; i++) {
          var point = new paper.Point((width / path.points) * i, center.y);
          p.add(point);
          //p.segments[i + 1].smooth({ type: "catmull-rom" });
        }
        p.add(topRight, bottomRight);
        /* p.fullySelected = true; */
        p.smooth({ type: "continuous" });

        // jank shit but it works, removes handles from the corners so the waves connect more "directly" to the sides of the page
        p.segments[p.segments.length - 2].handleIn = new paper.Point(0, 0);
        p.segments[p.segments.length - 2].handleOut = new paper.Point(0, 0);
        p.segments[p.segments.length - 1].handleIn = new paper.Point(0, 0);
        p.segments[p.segments.length - 1].handleOut = new paper.Point(0, 0);
        p.segments[1].handleIn = new paper.Point(0, 0);
        p.segments[1].handleOut = new paper.Point(0, 0);
        p.segments[0].handleIn = new paper.Point(0, 0);
        p.segments[0].handleOut = new paper.Point(0, 0);

        p.fillColor = {
          gradient: {
            stops: [path.colorStart, path.colorEnd],
          },
          origin: topLeft,
          destination: topRight,
        };
        p.opacity = path.opacity;
        p.strokeColor = "black";

        paths.push(p); // Pushin P
      });
    }

    function onFrame(event) {
      paths.map((path, index) => {
        pathHeight -= (center.y * 0.3 + pathHeight) / 10;
        for (var i = 2; i < pathGen[index].points + 1; i++) {
          var sinSeed = event.count + (i + (i % 10) + index) * 100;
          var sinHeight = Math.sin(sinSeed / 200) * pathHeight * (width / 1920);
          var yPos =
            Math.sin(sinSeed / 100) * sinHeight +
            center.y * (1 + (1 - pathGen[index].height));
          path.segments[i].point.y = yPos;
        }
        return null; // added return statement
      });
    }

    // Reposition the path whenever the window is resized:
    /* function onResize(event) {
        // Whenever the window is resized, recenter the path:
        initializePath();
    } */

    // Register the onFrame event handler
    paper.view.on("frame", onFrame);
    /* paper.view.on("resize", onResize); */

    // Clean up on component unmount
    return () => {
      bg.remove();
      paper.view.off("frame", onFrame);
      paths.map((path) => {
        path.remove();
        return null; // added return statement
      });
      /*  paper.view.off("resize", onResize); */
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} {...props} id="canvas" resize="true" />
      <CanvasOverlay />
    </>
  );
};

export default Canvas;
