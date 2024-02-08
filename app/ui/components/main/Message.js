import React from 'react';

const DisplayComponent = ({ message }) => {
  return (
    <div className="max-w-[464px] bg-[#766ac8] pl-[20px] py-[5px] pr-[30px] rounded-[15px]">
      <p>Received message: {message}</p>
    </div>
  );
};

export default DisplayComponent;
