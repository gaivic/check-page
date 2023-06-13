import React from 'react'
import {
    List,
    ListItem,
    ListItemSuffix,
    Card,
    IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";

import Place from './Place';

export default function PlacesList() {
    return (
        <Card className="w-full shadow-none ">
            <List>
                <ListItem  className="py-1 pr-1 pl-4">
                    Item One
                    <ListItemSuffix >
                        <IconButton variant="text" color="blue-gray" ripple={false}>
                            <TrashIcon className="h-5 w-5" />
                        </IconButton>
                    </ListItemSuffix>
                </ListItem>
                <ListItem className="py-1 pr-1 pl-4">
                    Item Two
                    <ListItemSuffix>
                        <IconButton variant="text" color="blue-gray" ripple={false} >
                            <TrashIcon className="h-5 w-5" />
                        </IconButton>
                    </ListItemSuffix>
                </ListItem>
                <ListItem className="py-1 pr-1 pl-4">
                    Item Three
                    <ListItemSuffix>
                        <IconButton variant="text" color="blue-gray" ripple={false} >
                            <TrashIcon className="h-5 w-5" />
                        </IconButton>
                    </ListItemSuffix>
                </ListItem>
            </List>
        </Card>
    );
}