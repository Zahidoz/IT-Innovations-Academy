import React from "react";
import { Main } from "../../Components/UserPanel/Main";
import { Topbar } from "../../Components/UserPanel/Topbar";
import { Sidebar } from "../../Components/UserPanel/Sidebar";

import * as S from "./styes";
import { useState } from "react";
import { useEffect } from "react";

import  {CheckUser}  from "../../Auth/checkUser";

const MainLayout = () => {

  const { user } = CheckUser();


  return (
    <S.MainLayout>
      <Sidebar />
      <S.MainSection>
        <Topbar user={user} />
        <Main></Main>
      </S.MainSection>
    </S.MainLayout>
  );
};

export { MainLayout };
