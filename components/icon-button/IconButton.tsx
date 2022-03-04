export default function IconButton() {
    return (
        <button className="appearance-none flex flex-col gap-2.5 text-white text-center">
            <div className="h-20 w-20 bg-blue-400 rounded-2xl">
                Icon
            </div> 
            <span className="w-full">Pay Now</span>
        </button>
    )
}