import React from 'react';


function SmartMeter() {

  return (
    <div>

      <div className="smartmeter-main">
        <div class="rounded">
          <div class="rounded-inner">
            <div className="center">
              <div className="address-input"><input placeholder="Wallet Address" /></div>
              <div className="consume">Time ####</div>

              <div className="consume">Consumption ####</div>
              <div className="produce">Production ####</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SmartMeter;