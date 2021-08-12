import React from 'react';

import classes from './progress-bar.module.scss';

interface ProgressBarProps {
  label: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage }) => (
  <div className={classes.wrapper}>
    <div className={classes.head}>
      <span>{label}</span>

      <span>{percentage}%</span>
    </div>
    <div className={classes.outer}>
      <style jsx>{`
        --bar-fill: ${percentage}%;
      `}</style>
      <div className={classes.inner} />
    </div>
  </div>
);

export default ProgressBar;
