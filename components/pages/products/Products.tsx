"use client"
import Button from "@/components/globals/Button"
import Card from "@/components/globals/Card"



const Products = () => {
     return (
        <>
            <section className="w-full flex flex-col gap-10">
                <Card className="!flex items-center !justify-between w-full">
                    <h2 className="text-lg font-bold">محصولات</h2>
                    <Button onClick={() => console.log("")} className="!w-auto !mt-0">
                        افزودن محصول
                    </Button>
                </Card>
                <Card>
                    <ul></ul>
                </Card>
            </section>
        </>
     )
}

export default Products