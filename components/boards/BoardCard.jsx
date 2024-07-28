import { colors } from "@/constants/colors";
import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { fontSizes } from "@/constants/fontSizes";
import CustomCenterModal from "../modals/CustomCenterModal";
import ProceedPopup from "../popups/ProceedPopup";
import { useRouter } from "next/router";

const BoardCard = ({ onEditClick, onOpenClick }) => {
  const [showWarnModal, setShowWarmModal] = useState(false);
  const { push } = useRouter();
  return (
    <Wrapper onClick={() => push(`/dashboard/taskboard/example`)}>
      <p className="title">Board</p>

      <p className="date">Created on: 22nd Oct. 2024</p>

      <div className="open">
        <span>
          <p
            className="edit"
            onClick={(e) => {
              e.stopPropagation();
              onEditClick(e);
            }}
          >
            Rename
          </p>
          <p
            className="delete"
            onClick={(e) => {
              e.stopPropagation();
              setShowWarmModal(true);
            }}
          >
            Delete
          </p>
        </span>
        <AiOutlineArrowRight
          size={20}
          color={colors.primary700}
          className="icon"
        />
      </div>
      <CustomCenterModal
        // width={isMobile ? "100%" : "600px"}
        // showClose={true}
        isOpen={showWarnModal}
        toggleModal={() => {
          setShowWarmModal((prev) => !prev);
        }}
      >
        <ProceedPopup
          title="Are you sure?"
          description={"Deleting a board is permanent, it cant be undone."}
        />
      </CustomCenterModal>
    </Wrapper>
  );
};

export default BoardCard;

const Wrapper = styled.div`
  background-color: ${colors.gray50};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 120px;
  border-radius: 5px;
  border: 1px solid ${colors.gray100};
  /* margin: 1rem; */
  padding: 1rem;
  gap: 0.5rem;
  p {
    font-size: ${fontSizes.xs};
    color: ${colors.gray600};
    font-weight: 400;
    /* background-color: ${colors.primary100}; */
    border-radius: 10px;
    padding: 0.05rem 0.5rem;
  }
  .title {
    font-size: ${fontSizes.m};
    font-weight: 600;
  }
  span {
    display: flex;
    gap: 0.5rem;
    p {
      font-size: ${fontSizes.xs};
      color: ${colors.gray600};
      font-weight: 400;
      background-color: ${colors.primary100};
      border-radius: 10px;
      padding: 0;
      padding: 0.15rem 0.5rem 0.05rem;
      margin: 0;
      border: 1px solid ${colors.gray300};
    }
    .edit {
      color: ${colors.primary700};
      background-color: ${colors.primary50};
    }
    .delete {
      color: ${colors.warning700};
      background-color: ${colors.warning100};
    }
  }
  .open {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .icon {
    background-color: ${colors.primary50};
    padding: 0.2rem;
  }
  &:hover {
    background-color: ${colors.gray100};
  }
`;
