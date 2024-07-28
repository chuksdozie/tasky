import BoardCard from "@/components/boards/BoardCard";
import CreateBoardForm from "@/components/compound/forms/CreateBoardForm";
import CustomCenterModal from "@/components/modals/CustomCenterModal";
import CustomRightModal from "@/components/modals/CustomRightModal";
import PrimaryButton from "@/components/simple/buttons/PrimaryButton";
import { colors } from "@/constants/colors";
import { fontSizes } from "@/constants/fontSizes";
import { useCounterQuery } from "@/hooks/counter/counter.hook";
import {
  useCreateTaskboard,
  useGetAllTaskboards,
} from "@/hooks/taskboard/taskboard.hook";
import React, { useState } from "react";
import styled from "styled-components";

const Index = () => {
  // const { data } = useCounterQuery();
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper>
      <div className="header">
        <div>
          <p className="title">My Boards</p>
          <p className="description">Create, Manage and View Boards</p>
        </div>
        <div>
          <PrimaryButton
            value={"+ New Board"}
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
      <div className="boardsWrapper">
        {taskboards?.map((board, index) => (
          <BoardCard
            key={index}
            onEditClick={() => setShowModal(true)}
            data={{}}
          />
        ))}
        {isLoading && <p>Loading...</p>}
        {!taskboards?.length && <p>No Boards Created Yet.</p>}
      </div>
      <CustomRightModal
        // width={isMobile ? "100%" : "600px"}
        // showClose={true}
        isOpen={showModal}
        toggleModal={() => {
          setShowModal((prev) => !prev);
        }}
      >
        <CreateBoardForm setShowModal={setShowModal} />
      </CustomRightModal>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.div`
  padding: 2rem;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${colors.gray100};
  height: 100%;
  overflow-y: scroll;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: ${fontSizes.l};
      font-weight: 600;
      color: ${colors.gray600};
    }
    .description {
      font-size: ${fontSizes.s};
      color: ${colors.gray500};
      font-weight: 200;
    }
  }
  .boardsWrapper {
    display: flex;
    margin: 2rem 0;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;
