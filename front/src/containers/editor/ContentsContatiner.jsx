import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


const ContentsContatiner = () => {
    const [sampleList, setSampleList] = useState([
        {id: '1', title: 'main'},
        {id: '2', title: 'mainText'},
        {id: '3', title: 'marryText'},
        {id: '4', title: 'gallery'},
        {id: '5', title: 'contact'},
        {id: '6', title: 'map'},
        {id: '7', title: 'guestBook'}
    ]);
    const getComponents = (title) => {
        let components;
        switch (title) {
            case 'main':
                components = (<div>mainComponents</div>);
                break;
            case 'mainText':
                components = (<div>mainTextContents</div>);
                break;
            case 'marryText':
                components = (<div>marryTextContents</div>);
                break;
            case 'gallery':
                components = (<div>galleryContents</div>);
                break;
            case 'contact':
                components = (<div>contactContents</div>);
                break;
            case 'map':
                components = (<div>mapContents</div>);
                break;
            case 'guestBook':
                components = (<div>guestBookContents</div>);
                break;
            default:
                components = (<div>default</div>);
                break;
        }
        return components;
    }

    const grid = 8;

    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,

        // change background colour if dragging
        background: isDragging ? "lightgreen" : "grey",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
        padding: grid,
        width: 250
    });

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            sampleList,
            result.source.index,
            result.destination.index
        );
        
        setSampleList(items);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    >
                    {sampleList.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                            <Accordion 
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                // {...provided.dragHandleProps}
                                TransitionProps={{ unmountOnExit: true }}>
                                <AccordionSummary
                                    {...provided.dragHandleProps}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={item.id}
                                    id={item.id}
                                    // style={getItemStyle(
                                    //     snapshot.isDragging,
                                    //     provided.draggableProps.style
                                    // )}
                                    >
                                    <MenuIcon />
                                    <Typography>{item.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {getComponents(item.title)}
                                </AccordionDetails>
                            </Accordion>
                        )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default ContentsContatiner;