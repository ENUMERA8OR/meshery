import React from 'react';

export const DisconnectIcon = ({ width, height, fill}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0942 8.48962L8.4791 11.1047L6.39535 9.02098L9.00004 6.41629L7.95816 5.37441L5.35348 7.9791L4.75961 7.38523C4.50956 7.13518 4.08239 7.16644 3.79066 7.45816C3.49894 7.74989 3.46768 8.17706 3.71773 8.42711L3.79066 8.50004L1.70691 10.5838C1.20681 11.0839 1.20681 12.1674 1.70691 12.6675L2.74879 13.7094L0.665039 15.7932V16.835H1.70691L3.79066 14.7513L4.83254 15.7932C5.33264 16.2933 6.41619 16.2933 6.91629 15.7932L9.00004 13.7094L9.07297 13.7823C9.32302 14.0324 9.75019 14.0011 10.0419 13.7094C10.3336 13.4177 10.3649 12.9905 10.1148 12.7405L9.52098 12.1466L12.1361 9.5315L11.0942 8.48962ZM17.335 0.165039H16.2932L14.2094 2.24879L13.1675 1.20691C12.6674 0.706814 11.5839 0.706814 11.0838 1.20691L10.0523 2.23837L9.96898 2.16544C9.72935 1.92581 9.29176 1.95706 9.01046 2.23837C8.71873 2.5301 8.68748 2.96768 8.92711 3.20731L9.00004 3.28025L8.98962 3.30108L14.2094 8.50004L14.2198 8.48962L14.2928 8.56255C14.5428 8.8126 14.97 8.77093 15.2617 8.48962C15.5534 8.1979 15.5847 7.77073 15.3346 7.52068L15.2617 7.44775L16.2932 6.41629C16.7933 5.91619 16.7933 4.83264 16.2932 4.33254L15.2513 3.29066L17.335 1.20691V0.165039Z"
        fill={fill}
      />
    </svg>
  );
};

export default DisconnectIcon;