import React from 'react';


function gridflow(childRefs) {
  console.log(childRefs);
  return (
    <div class="circle">1
      <gridnode val="1" />
    </div>
  );
}
function gridnode(val) {
  console.log(val);
  return (
    <div>
      11{val}
    </div>
  );
}
export default gridflow;