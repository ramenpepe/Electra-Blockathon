import React, { useState, useRef, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import SmartMeter from './components/SmartMeter';
import GridFlow from './components/GridFlow';
import Savings from './components/Savings';
import Bill from './components/Bill';
import Swap from './components/Swap';
import Trx from './components/Trx';
import Vault from './components/Vault';

import "./App.css";


const ResponsiveReactGridLayout = WidthProvider(Responsive);



const ReactGridLayout = () => {
  const [layouts, setLayouts] = useState(null);
  const [widgetArray, setWidgetArray] = useState(
    () => {
      if (typeof localStorage.layout !== "undefined") {
        return JSON.parse(localStorage.layout);

      } else {
        return [];
      }


    });


  const [width, setWidth] = useState(400); // Set the initial width of the parent div
  const [height, setHeight] = useState(400); // Set the initial height of the parent div
  const childRefs = useRef([]);

  useEffect(() => {
    // Call the handleResize function when the component mounts to update the child components
    handleResize();
  }, []);

  const handleResize = () => {
    console.log('resizing');
    // Loop through the childRefs and update the position and angle of each child component
    childRefs.current.forEach((childRef, index) => {
      const angle = (index / childRefs.current.length) * 360;
      const radius = Math.min(width, height) * 0.4;
      const x = Math.cos(angle * Math.PI / 180) * radius;
      const y = Math.sin(angle * Math.PI / 180) * radius;
      childRef.style.transform = `translate(${x}px, ${y}px) rotate(${angle - 90}deg)`;
    });
    console.log(childRefs.style);
  };


  const handleModify = (layouts, layout) => {
    const tempArray = widgetArray;
    setLayouts(layout);
    layouts?.map((position) => {
      tempArray[Number(position.i)].x = position.x;
      tempArray[Number(position.i)].y = position.y;
      tempArray[Number(position.i)].width = position.w;
      tempArray[Number(position.i)].height = position.h;
    });
    setWidgetArray(tempArray);
  };

  const handleAdd = (type, w, h, r) => {
    setWidgetArray([
      ...widgetArray,
      { i: "widget" + (widgetArray.length + 1), x: 0, y: 0, w: w, h: h, t: type, r: r },
    ]);
  };

  const saveLayout = () => {
    console.log(widgetArray);
    localStorage.layout = JSON.stringify(widgetArray);
  };

  const handleDelete = (key) => {
    const tempArray = widgetArray.slice();
    const index = tempArray.indexOf(tempArray.find((data) => data.i === key));
    tempArray.splice(index, 1);
    setWidgetArray(tempArray);
  };

  return (
    <div>
      <button onClick={() => handleAdd("smartmeter", 2, 2, false)}>Add Smart Meter</button>
      <button onClick={() => handleAdd("gridflow", 4, 2, true)}>Add Grid Flow Diagram</button>
      <button onClick={() => handleAdd("savings", 1, 1, true)}>Add Savings</button>
      <button onClick={() => handleAdd("bill", 3, 3, true)}>Add Bill</button>
      <button onClick={() => handleAdd("trx", 8, 4, true)}>Add Block Transactions</button>
      <button onClick={() => handleAdd("vault", 2, 3, true)}>Add Vault</button>
      <button onClick={() => handleAdd("swap", 3, 3, true)}>Add Swap</button>
      <button onClick={() => saveLayout()}>Save Layout</button>

      <ResponsiveReactGridLayout
        onLayoutChange={handleModify}
        verticalCompact={true}
        layout={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        preventCollision={false}
        cols={{ lg: 8, md: 8, sm: 4, xs: 2, xxs: 2 }}
        autoSize={true}
        margin={{
          lg: [20, 20],
          md: [20, 20],
          sm: [20, 20],
          xs: [20, 20],
          xxs: [20, 20],
        }}
      >
        {widgetArray?.map((widget, index) => {
          let component;
          switch (widget.t) {
            case 'smartmeter':
              component = <SmartMeter />
              break;
            case 'gridflow':
              component = <GridFlow childRefs={childRefs} handleResize={handleResize} />;
              break;
            case 'savings':
              component = <Savings />;
              break;
            case 'bill':
              component = <Bill />;
              break;
            case 'vault':
              component = <Vault />;
              break;
            case 'trx':
              component = <Trx />;
              break;
            case 'swap':
              component = <Swap />;
              break;
            default:
              component = '<div />';
          }
          console.log(widget?.r);
          return (
            <div
              className="reactGridItem"
              key={index}
              data-grid={{
                x: widget?.x,
                y: widget?.y,
                w: widget?.w,
                h: widget?.h,
                i: widget.i,
                minW: 2,
                maxW: Infinity,
                minH: 2,
                maxH: Infinity,
                isDraggable: true,
                isResizable: widget?.r,
              }}
            >
              <button
                className="deleteButton"
                onClick={() => handleDelete(widget.i)}
              >
                x
              </button>

              {component}
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};


export default ReactGridLayout;
