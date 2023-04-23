import { createPost } from "../../../lib/posts";
import format from "date-fns/format";

export default async function hanlder (req,res) {
    console.log(req.body)
    const {id, title, content} = req.body

    try {
        await createPost({id,title, date : format(new Date() , 'yyyy-MM-dd') ,content})
        res.status(200).json({ message: "create success" });
    } catch (error) {
        res.status(500).json({ message: `create failed ${error}` });
    }
    
}