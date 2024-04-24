export default async function Read(props){
    const resp = await fetch(`http://localhost:3001/topics/${props.params.id}`,{cache:'no-store'});
    const topic = await resp.json();
    return (
        <>
            <h2>{topic.title}</h2>
            {topic.body}
        </>
    )
}