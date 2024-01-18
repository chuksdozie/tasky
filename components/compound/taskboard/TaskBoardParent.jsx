import React, { useState } from "react";
import Head from "next/head";
import { Wrapper } from "@/components/styles/general";
import styled from "styled-components";
import { colors } from "@/constants/colors";
import { sampleData } from "@/constants/sampleData";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

export default function TaskBoardParent() {
  const [stores, setStores] = useState(sampleData);
  const handleDragEnd = (event) => {
    console.log({ event });
    const { source, destination, type } = event;
    if (!source || !destination) return;
    const isSameGroup = source?.droppableId === destination?.droppableId;
    const isNotSameGroup = source?.droppableId !== destination?.droppableId;

    if (isSameGroup && type === "rack") {
      const originalArray = [...stores];

      const [removed] = originalArray.splice(source?.index, 1);
      originalArray.splice(destination?.index, 0, removed);
      setStores(originalArray);
      return;
    } else if (isSameGroup) {
      const originalArray = [...stores];
      const groupIndex = stores.findIndex(
        (store) => store?.id === source?.droppableId
      );
      const newArray = [...stores[groupIndex].items];
      const [removed] = newArray.splice(source?.index, 1);
      newArray.splice(destination?.index, 0, removed);
      originalArray[groupIndex]["items"] = newArray;
      setStores(originalArray);
    } else if (isNotSameGroup) {
      const originalArray = [...stores];
      const sourceGroupIndex = stores.findIndex(
        (store) => store?.id === source?.droppableId
      );
      const destinationGroupIndex = stores.findIndex(
        (store) => store?.id === destination?.droppableId
      );
      const newSourceArray = [...stores[sourceGroupIndex].items];
      const newDestinationArray = [...stores[destinationGroupIndex].items];
      const [removed] = newSourceArray.splice(source?.index, 1);
      newDestinationArray.splice(destination?.index, 0, removed);
      originalArray[sourceGroupIndex]["items"] = newSourceArray;
      originalArray[destinationGroupIndex]["items"] = newDestinationArray;
      setStores(originalArray);
    }

    return;
  };
  return (
    <>
      <Head>
        <title>Tasky</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <h1>Task Board Name</h1>
        <PageContainer>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="rack" type={"rack"} direction="horizontal">
              {(provided) => (
                <div
                  className="overall"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {stores?.map((group, index) => (
                    <Draggable
                      key={group?.id}
                      index={index}
                      draggableId={group?.id}
                    >
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <Rack key={group?.id} group={group} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </PageContainer>
      </Wrapper>
    </>
  );
}

const Rack = ({ group }) => {
  return (
    <Droppable key={group?.id} droppableId={group?.id} type="group">
      {(provided) => (
        <div
          className="task_group"
          {...provided.droppableProps}
          ref={provided?.innerRef}
        >
          <h3>{group?.name}</h3>
          {group?.items?.map((item, index) => (
            <Draggable key={item?.id} draggableId={item?.id} index={index}>
              {(provided) => (
                <div
                  className="task_card"
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <h4>{item?.name}</h4>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const PageContainer = styled.div`
  display: flex;
  .overall {
    display: flex;
    gap: 1rem;
    background-color: ${colors.gray100};
    padding: 1rem;
    overflow: scroll;
    margin-top: 1rem;
    border-radius: 10px;
    width: 100%;
  }
  .task_group {
    display: flex;
    flex-direction: column;
    min-height: 150px;
    width: 300px;
    background-color: ${colors.gray300};
    padding: 1.5rem 1rem;
    /* margin: 0 1rem; */

    background-color: ${colors.primary200};
    height: fit-content;
    border-radius: 10px;
  }
  .task_card {
    width: 100%;
    height: 70px;
    padding: 0.5rem;
    background-color: ${colors.gray200};
    margin: 0.5rem 0;
    border-radius: 8px;
  }

  .drop {
    background-color: red;
  }
  .rack {
    display: flex;
    flex-direction: column;
    /* height: fit-content; */
    background-color: orange;
    width: 300px;
    padding: 1rem;
  }
  .placeholder {
    background-color: rgba(0, 50, 0, 0.2);
  }
`;
