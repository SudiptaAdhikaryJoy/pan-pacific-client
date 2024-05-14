import Image from "next/image";
import React from "react";
import { Styled } from "./Loader.styled";

const Loader = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <Styled.LoaderContainer>
        <Styled.Box1>
          <Styled.Box1Before />
        </Styled.Box1>
        <Styled.LoaderText>
        </Styled.LoaderText>
      </Styled.LoaderContainer>
    </div>
  );
};

export default Loader;
