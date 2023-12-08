import { useLoaderData } from "react-router-dom";


const UpdateData = () => {
    const lodeUser = useLoaderData()
    console.log(lodeUser)
    return (
        <div>
            <h2> update data:{lodeUser.name} </h2>
        </div>
    );
};

export default UpdateData;