import { SubmitButtonType } from "@/utils/schemas/types"

const SubmitButton = ({ text }: SubmitButtonType) => {
    return (
        <>
            <button type="submit" className="text-white bg-black p-2 w-full rounded-xl mt-5 cursor-pointer hover:bg-black/80 duration-150 active:bg-white shadow border-black active:text-black active:border-2 border-2">
                {text}
            </button>
        </>
    )
}

export default SubmitButton