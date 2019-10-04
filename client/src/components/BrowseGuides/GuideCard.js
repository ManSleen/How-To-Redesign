import React from 'react';

import tech1 from '../../assets/images/tech1.jpg';
import avatar from '../../assets/images/user-avatar.png';

const GuideCard = () => {
  return (
    <div className="guide-card-container">
      <img src={tech1} />
      <div className="guide-card-bottom">
        <div className="guide-card-avatar">
          <img src={avatar} />
        </div>
        <div className="guide-card-info">
          <h3>DIY smartphone clock</h3>
          <h4>
            by <span>miyah.myles</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;