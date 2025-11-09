"use client";
import { useState } from "react";
import Button from "./Button";
import { PaginationPropsType } from "@/utils/schemas/types";


const Pagination = ({
    onNextPage,
    onPrevPage,
    nextPageIcon,
    prevPageIcon
}: PaginationPropsType) => {
    const [isDisableNext, setDisableNext] = useState(false)
    const [isDisablePrev, setDisablePrev] = useState(false)
    return (
        <>
            <Button disabled={isDisablePrev} onClick={() => onPrevPage(setDisablePrev)} className={` ${isDisablePrev ? "bg-black/30" : ""} !w-10 !h-10 !p-`}>
                {prevPageIcon}
            </Button>
            <Button disabled={isDisableNext} onClick={() => onNextPage(setDisableNext)} className={` ${isDisableNext ? "bg-black/30" : ""} !w-10 !h-10 !p-`}>
                {nextPageIcon}
            </Button>
        </>
    )
}

export default Pagination;