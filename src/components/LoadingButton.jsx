import React from "react";
import { Button } from "react-bootstrap";
import { ThreeDots } from "react-loader-spinner";
const LoadingButton = () => {
  return (
    <div>
      <Button
        className="SubmitButton w-100 d-flex justify-content-center"
        type="button"
      >
        <ThreeDots
          visible={true}
          height="40"
          width="40"
          color="#fff"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </Button>
    </div>
  );
};

export default LoadingButton;
