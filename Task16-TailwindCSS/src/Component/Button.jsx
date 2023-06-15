
function Button(props){
    return(
        <>
            <button className="bg-green-200 p-5 h-10 mr-5 flex items-center rounded border-dashed  border-indigo-400 border-2">{props.children}</button>
        </>
    )

}

export default Button